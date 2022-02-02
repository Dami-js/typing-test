import React from "react";
import Button from "../../components/Button";
import ParagraphTextField from "../../components/ParagraphTextField";
import SetTimer from "../../components/SetTimer";
import { useAppContext } from "../../providers/AppProvider";
import { Views } from "../../utils";

const StartScreen = () => {
  const { setView } = useAppContext();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <SetTimer />
        <Button onClick={() => setView(Views.Typing)}>Start</Button>
      </div>
      <ParagraphTextField />
    </div>
  );
};

export default StartScreen;
