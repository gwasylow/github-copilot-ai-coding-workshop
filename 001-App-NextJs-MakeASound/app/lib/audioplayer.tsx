"use client";
import { useState, useRef, CSSProperties } from "react";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (filename: string) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const isSameTrack = currentTrack === filename;

    if (isSameTrack) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      audio.src = `/music/${filename}`;
      audio.play();
      setCurrentTrack(filename);
      setIsPlaying(true);
    }
  };

  const getButtonLabel = (track: Track) => {
    return currentTrack === track.filename && isPlaying
      ? "Pause"
      : track.label;
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} preload="auto" />
      {TRACKS.map((track) => (
        <button
          key={track.id}
          onClick={() => playTrack(track.filename)}
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0051a8"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#0070f3"}
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
