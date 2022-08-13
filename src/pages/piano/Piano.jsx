import React, { useEffect, useState } from "react";
import "../../assets/css/piano.css";
import Note_A from "../../assets/sounds/piano_public_notes_a.mp3";
import Note_AF from "../../assets/sounds/piano_public_notes_af.mp3";
import Note_B from "../../assets/sounds/piano_public_notes_b.mp3";
import Note_BF from "../../assets/sounds/piano_public_notes_bf.mp3";
import Note_C from "../../assets/sounds/piano_public_notes_c.mp3";
import Note_D from "../../assets/sounds/piano_public_notes_d.mp3";
import Note_DF from "../../assets/sounds/piano_public_notes_df.mp3";
import Note_E from "../../assets/sounds/piano_public_notes_e.mp3";
import Note_EF from "../../assets/sounds/piano_public_notes_ef.mp3";
import Note_F from "../../assets/sounds/piano_public_notes_f.mp3";
import Note_G from "../../assets/sounds/piano_public_notes_g.mp3";
import Note_GF from "../../assets/sounds/piano_public_notes_gf.mp3";
import KeyNote from "./components/KeyNote";
import MusicSheet from "./components/MusicSheet";

const Piano = () => {
  const [keyNoteList] = useState([
    {
      keyLetter: "c",
      sound: Note_C,
    },
    {
      keyLetter: "df",
      sound: Note_DF,
    },
    {
      keyLetter: "d",
      sound: Note_D,
    },
    {
      keyLetter: "ef",
      sound: Note_EF,
    },
    {
      keyLetter: "e",
      sound: Note_E,
    },
    {
      keyLetter: "f",
      sound: Note_F,
    },
    {
      keyLetter: "gf",
      sound: Note_GF,
    },
    {
      keyLetter: "g",
      sound: Note_G,
    },
    {
      keyLetter: "af",
      sound: Note_AF,
    },
    {
      keyLetter: "a",
      sound: Note_A,
    },
    {
      keyLetter: "bf",
      sound: Note_BF,
    },
    {
      keyLetter: "b",
      sound: Note_B,
    },
  ]);

  const [audio, setAudio] = useState(null);
  const [pressedKey, setPressedKey] = useState(null);

  // Methods :
  const handleClick = (key, sound) => {
    setPressedKey(key);
    setTimeout(() => {
      setPressedKey(null);
    }, 100);

    if (sound) setAudio(new Audio(sound));
  };

  const playSound = () => {
    if (audio) audio.play();
  };

  useEffect(() => {
    playSound();
  }, [audio]);

  return (
    <div className="pianoContainer">
      <h2 className="mt-5">Piano</h2>
      <div className="row justify-content-between">
        <div className="keyNoteContainer col-lg-6 col-12">
          {Object.entries(keyNoteList).map((note, index) => (
            <KeyNote
              key={"keynote_" + index}
              note={note[1]}
              index={index}
              handleClick={handleClick}
              pressedKey={pressedKey}
            />
          ))}
        </div>
        <div className="col-lg-6 col-12">
          <MusicSheet />
        </div>
      </div>
    </div>
  );
};

export default Piano;
