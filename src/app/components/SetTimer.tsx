import React from "react";
import { useAppContext } from "../providers/AppProvider";

const SetTimer = () => {
  const { time, setTime } = useAppContext();
  const [customTime, setCustomTime] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "custom") {
      return setCustomTime(true);
    }
    setTime(Number(e.target.value));
    setCustomTime(false);
  };

  return (
    <div className="flex items-center">
      <p className="font-bold">Set Timer</p>
      <select
        className="py-2 px-4 mx-3 bg-white border outline-none rounded-sm"
        onChange={(e) => handleChange(e)}
      >
        <option value="1">1 minute</option>
        <option value="2">2 minutes</option>
        <option value="5">5 minutes</option>
        <option value="custom">Custom</option>
      </select>
      {customTime && (
        <input
          type="number"
          placeholder="Enter time (e.g 3)"
          className="py-2 px-2 w-20 border rounded-sm outline-none"
          value={time}
          min={1}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      )}
    </div>
  );
};

export default SetTimer;
