import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import JingleBell from "../../../assets/images/JingleBells.jpg";
import TwinkleLittleStar from "../../../assets/images/TwinkleLittleStar.jpg";

const MusicSheet = () => {
  const [selectedSheet, updateSelectedSheet] = useState("JingleBell");

  const handleSheetSelection = (sheet) => {
    console.log(sheet.target.value);
    if (selectedSheet !== sheet.target.value) updateSelectedSheet(sheet.target.value);
  };

  const defineImage = () => {
    if (selectedSheet === "JingleBell")
      return <img src={JingleBell} alt="music sheet" />;
    else if (selectedSheet === "TwinkleLittleStar")
      return <img src={TwinkleLittleStar} alt="music sheet" />;
  };

  return (
    <div className="musicSheet">
      <Form.Select onChange={(e) => handleSheetSelection(e)}>
        <option value="JingleBell">Jingle Bell</option>
        <option value="TwinkleLittleStar">Twinkle Twinkle Little Star</option>
      </Form.Select>
      <div style={{ textAlign: 'left' }}>{defineImage()}</div>
    </div>
  );
};

export default MusicSheet;
