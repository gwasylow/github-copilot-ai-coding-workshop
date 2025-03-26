"use client";
import { useState, useRef, useCallback, useEffect, CSSProperties } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTrack(null);
    };

    const handleError = () => {
      setIsPlaying(false);
      setIsLoading(false);
      console.error('Error playing audio');
    };

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const playTrack = useCallback(async (filename: string) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const isSameTrack = currentTrack === filename;

    try {
      if (isSameTrack) {
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } else {
        audio.src = `/music/${filename}`;
        await audio.play();
        setCurrentTrack(filename);
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Playback failed:', error);
      setIsPlaying(false);
    }
  }, [currentTrack, isPlaying]);

  const getButtonLabel = useCallback((track: Track) => {
    if (currentTrack === track.filename) {
      if (isLoading) return "Loading...";
      return isPlaying ? "Pause" : "Play";
    }
    return track.label;
  }, [currentTrack, isPlaying, isLoading]);

  return (
    <div style={styles.container}>
      <audio ref={audioRef} preload="auto" />
      {TRACKS.map((track) => (
        <button
          key={track.id}
          onClick={() => playTrack(track.filename)}
          style={{
            ...styles.button,
            opacity: isLoading && currentTrack === track.filename ? 0.7 : 1,
          }}
          disabled={isLoading && currentTrack === track.filename}
        >
          {getButtonLabel(track)}
        </button>
      ))}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
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
};

export default AudioPlayer;
