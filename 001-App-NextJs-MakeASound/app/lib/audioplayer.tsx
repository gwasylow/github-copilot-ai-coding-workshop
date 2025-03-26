"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { styled } from "@emotion/styled";

// Types
interface Track {
  id: string;
  label: string;
  filename: string;
}

interface AudioState {
  isPlaying: boolean;
  currentTrack: string | null;
  isLoading: boolean;
  error: string | null;
  volume: number;
}

// Constants
const INITIAL_STATE: AudioState = {
  isPlaying: false,
  currentTrack: null,
  isLoading: false,
  error: null,
  volume: 1.0,
};

const TRACKS: Track[] = [
  { id: "intro", label: "Play INTRO", filename: "familiada_intro.mp3" },
  { id: "correct", label: "Play CORRECT", filename: "familiada_correct.mp3" },
  { id: "fail", label: "Play FAIL", filename: "familiada_fail.mp3" },
];

const AudioPlayer = () => {
  const [state, setState] = useState<AudioState>(INITIAL_STATE);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateState = useCallback((updates: Partial<AudioState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Audio Event Handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const eventHandlers = {
      ended: () => updateState({ isPlaying: false, currentTrack: null }),
      error: () => updateState({ 
        isPlaying: false, 
        isLoading: false, 
        error: 'Failed to play audio' 
      }),
      loadstart: () => updateState({ isLoading: true, error: null }),
      canplay: () => updateState({ isLoading: false }),
      volumechange: () => updateState({ volume: audio.volume }),
    };

    Object.entries(eventHandlers).forEach(([event, handler]) => {
      audio.addEventListener(event, handler);
    });

    return () => {
      Object.entries(eventHandlers).forEach(([event, handler]) => {
        audio?.removeEventListener(event, handler);
      });
    };
  }, [updateState]);

  const playTrack = useCallback(async (filename: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      const isSameTrack = state.currentTrack === filename;

      if (isSameTrack) {
        if (state.isPlaying) {
          audio.pause();
          updateState({ isPlaying: false });
        } else {
          await audio.play();
          updateState({ isPlaying: true });
        }
      } else {
        updateState({ isLoading: true, error: null });
        audio.src = `/music/${filename}`;
        await audio.play();
        updateState({ 
          currentTrack: filename, 
          isPlaying: true,
          isLoading: false 
        });
      }
    } catch (error) {
      updateState({ 
        isPlaying: false,
        isLoading: false,
        error: 'Playback failed. Please try again.' 
      });
    }
  }, [state.currentTrack, state.isPlaying, updateState]);

  return (
    <Container>
      <audio ref={audioRef} preload="auto" />
      {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
      <ButtonGroup>
        {TRACKS.map((track) => (
          <PlayButton
            key={track.id}
            onClick={() => playTrack(track.filename)}
            $isActive={state.currentTrack === track.filename}
            $isPlaying={state.isPlaying}
            disabled={state.isLoading && state.currentTrack === track.filename}
          >
            {state.currentTrack === track.filename ? (
              state.isLoading ? (
                <LoadingSpinner />
              ) : (
                state.isPlaying ? "■ Stop" : "▶ Play"
              )
            ) : (
              track.label
            )}
          </PlayButton>
        ))}
      </ButtonGroup>
      <VolumeControl
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={state.volume}
        onChange={(e) => {
          if (audioRef.current) {
            audioRef.current.volume = Number(e.target.value);
          }
        }}
      />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const PlayButton = styled.button<{ $isActive: boolean; $isPlaying: boolean }>`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ $isActive, $isPlaying }) => 
    $isActive ? ($isPlaying ? '#dc2626' : '#2563eb') : '#3b82f6'};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: brightness(110%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  background-color: #fee2e2;
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
`;

const VolumeControl = styled.input`
  width: 100%;
  margin-top: 0.5rem;
`;

const LoadingSpinner = styled.div`
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  width: 1rem;
  height: 1rem;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 0.5rem;
`;

export default AudioPlayer;
