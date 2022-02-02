import React, { useContext } from "react";
import { Views } from "../utils";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";

interface IAppContext {
  time: number;
  testPhrase: string;
  view: number;
  setTestPhrase: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setView: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {}

const AppProvider = ({
  children,
}: React.PropsWithChildren<AppProviderProps>) => {
  const [time, setTime] = React.useState(1);
  const [testPhrase, setTestPhrase] = React.useState<string>(text);
  const [view, setView] = React.useState<number>(Views.Start);
  return (
    <AppContext.Provider
      value={{ time, testPhrase, view, setView, setTestPhrase, setTime }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('use "useAppContext" inside "AppProvider" ');
  }

  return context;
};

export default AppProvider;
