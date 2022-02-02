import React from "react";
import AppProvider from "./providers/AppProvider";
import View from "./screens/View";

function App() {
  return (
    <AppProvider>
      <div className="md:w-5/6 lg:w-4/6  p-4 min-h-screen mx-auto bg-slate-50 md:p-10">
        <div className="text-center py-5">
          <p className="text-2xl font-bold text-gray-800 active:opacity-5">
            Typing Test
          </p>
        </div>
        <View />
      </div>
    </AppProvider>
  );
}

export default App;
