/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Button from "../components/Button";
import Textarea from "../components/inputs/Textarea";
import { useAppContext } from "../providers/AppProvider";
import { Views } from "../utils";

const calculatePoints = (phrase: Array<string>, valueArray: Array<string>) => {
  let $points = 0;
  phrase.forEach((item, index) => {
    if (valueArray[index] === item) {
      $points++;
    }
  });
  return $points;
};

const TypingScreen = () => {
  const { testPhrase, time, setView } = useAppContext();
  const [value, setValue] = React.useState("");
  const [valueArray, setValueArray] = React.useState<Array<string>>([]);
  const [timeLeft, setTimeLeft] = React.useState(time * 60);
  const [start, setStart] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [result, setResult] = React.useState({ points: 0, score: 0 });
  const phraseArray = testPhrase.split(" ");

  const getTimeLeft = React.useMemo(() => {
    const totalTimeInSeconds = timeLeft;
    const totalTimeInMinute = Math.floor(totalTimeInSeconds / 60);
    const timeLeftInSeconds = totalTimeInSeconds - totalTimeInMinute * 60;

    return `${totalTimeInMinute} : ${
      timeLeftInSeconds < 10 ? `0${timeLeftInSeconds}` : timeLeftInSeconds
    }`;
  }, [timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const $valueArray = e.target.value.split(" ");
    setValueArray($valueArray);
    setValue(e.target.value);
  };

  const handleViewResult = () => {
    const _result = calculatePoints(phraseArray, valueArray);
    const score = Math.round((_result / phraseArray.length) * 100);
    setResult({ points: _result, score });
  };

  const handleRetry = () => {
    setView(Views.Start);
    setValue("");
    setValueArray([]);
    setDone(false);
    setResult({ points: 0, score: 0 });
  };

  React.useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (timeLeft === 0) {
          setStart(false);
          return setDone(true);
        }
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [start, timeLeft]);

  React.useEffect(() => {
    if (done) {
      handleViewResult();
    }
  }, [done]);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold bg-white px-3 py-6 border text-gray-800 w-fit rounded-full">
          {getTimeLeft}
        </p>
        <div className="">
          {!done && (
            <Button
              className="mr-2"
              onClick={() => setStart(true)}
              disabled={start}
            >
              Start Test
            </Button>
          )}
          <Button onClick={handleRetry}>Reset</Button>
        </div>
      </div>

      {done && (
        <div className="text-center mt-10">
          <p className="text-4xl">Time up!</p>
          <div className="my-8">
            <p className="text-2xl text-gray-500">
              Points{" "}
              <span className="text-3xl text-gray-700 font-bold">
                {result.points}
              </span>
            </p>
            <p className="text-2xl text-gray-500">
              Score{" "}
              <span className="text-3xl text-gray-700 font-bold">
                {result.score}%
              </span>
            </p>
          </div>
          <Button className="mt-4" onClick={handleRetry}>
            Try again
          </Button>
        </div>
      )}

      {!done && (
        <>
          <div className="mt-6">
            <p className="text-2xl leading-relaxed font-semibold text-gray-700 pointer-events-none select-none cursor-none flex flex-wrap gap-2">
              {phraseArray.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={valueArray[index] === item ? "bg-blue-200" : ""}
                >
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-6">
            <Textarea
              placeholder="Press start test to begin"
              className="resize-none"
              onChange={(e) => handleChange(e)}
              value={value}
              disabled={!start}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TypingScreen;
