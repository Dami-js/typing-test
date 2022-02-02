import React from "react";
import { useAppContext } from "../providers/AppProvider";
import { Views } from "../utils";
import StartScreen from "./StartScreen";
import TypingScreen from "./TypingScreen";

const View = () => {
  const { view } = useAppContext();
  if (view === Views.Typing) {
    return <TypingScreen />;
  }
  return <StartScreen />;
};

export default View;
