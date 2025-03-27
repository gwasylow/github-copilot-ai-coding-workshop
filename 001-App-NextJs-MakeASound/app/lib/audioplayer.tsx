"use client";
import { useState, useRef, useCallback, useEffect, useMemo, CSSProperties } from "react";

//This component has been created for further optimizations using COPILOT

interface Track {
  id: string;
  label: string;
  filename: string;
}

const TRACKS: Track[] = [
  { id: "intro", label: "Play INTRO", filename: "familiada_intro.mp3" },
  { id: "correct", label: "Play CORRECT", filename: "familiada_correct.mp3" },
  { id: "fail", label: "Play FAIL", filename: "familiada_fail.mp3" },
];

const AudioPlayer = () => {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    currentTrack: null as string | null,
    isLoading: false,
    error: null as string | null,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlers = {
      ended: () => setAudioState(prev => ({ ...prev, isPlaying: false, currentTrack: null })),
      error: () => setAudioState(prev => ({ ...prev, isPlaying: false, isLoading: false, error: "Playback error" })),
      loadstart: () => setAudioState(prev => ({ ...prev, isLoading: true })),
      canplay: () => setAudioState(prev => ({ ...prev, isLoading: false, error: null }))
    };

    Object.entries(handlers).forEach(([event, handler]) => {
      audio.addEventListener(event, handler);
    });

    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        audio.removeEventListener(event, handler);
      });
    };
  }, []);
  const playTrack = useCallback(
    async (filename: string) => {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      const isSameTrack = audioState.currentTrack === filename;

      try {
        if (isSameTrack) {
          if (audioState.isPlaying) {
            audio.pause();
            setAudioState((prev) => ({ ...prev, isPlaying: false }));
          } else {
            await audio.play();
            setAudioState((prev) => ({ ...prev, isPlaying: true }));
          }
        } else {
          audio.src = `/music/${filename}`;
          await audio.play();
          setAudioState({ isPlaying: true, currentTrack: filename, isLoading: false, error: null });
        }
      } catch (error) {
        console.error("Playback failed:", error);
        setAudioState((prev) => ({ ...prev, isPlaying: false, error: "Playback failed" }));
      }
    },
    [audioState]
  );

  const getButtonLabel = useCallback(
    (track: Track) => {
      if (audioState.currentTrack === track.filename) {
        if (audioState.isLoading) return "Loading...";
        return audioState.isPlaying ? "Pause" : "Play";
      }
      return track.label;
    },
    [audioState]
  );

  const getButtonStyle = useCallback(
    (track: Track) => ({
      ...styles.button,
      opacity: audioState.isLoading && audioState.currentTrack === track.filename ? 0.7 : 1,
    }),
    [audioState]
  );

  const styles = useMemo(
    () =>
      ({
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
        },
        button: {
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#0070f3",
          color: "white",
          cursor: "pointer",
          width: "100%",
          transition: "background-color 0.2s ease",
        },
        error: {
          color: "red",
          marginTop: "10px",
        },
      } as Record<string, CSSProperties>),
    []
  );

  return (
    <div style={styles.container}>
      <audio ref={audioRef} preload="auto" />
      {TRACKS.map((track) => (
        <button
          key={track.id}
          onClick={() => playTrack(track.filename)}
          style={getButtonStyle(track)}
          disabled={audioState.isLoading && audioState.currentTrack === track.filename}
        >
          {getButtonLabel(track)}
        </button>
      ))}
      {audioState.error && <div style={styles.error}>{audioState.error}</div>}
    </div>
  );
};

export default AudioPlayer;
