import React from "react";
import { useAppContext } from "../providers/AppProvider";
import Button from "./Button";
import Textarea from "./inputs/Textarea";

const ParagraphTextField = () => {
  const [editable, setEditable] = React.useState<boolean>(false);
  const { setTestPhrase, testPhrase } = useAppContext();

  const wordsCount = React.useMemo(() => testPhrase.split(" "), [testPhrase]);

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl text-gray-800">Test Paragraph</p>
        <p className="text-gray-600">{wordsCount.length} words</p>
      </div>
      <Textarea
        value={testPhrase}
        rows={7}
        onChange={(e) => setTestPhrase(e.target.value)}
        disabled={!editable}
      />
      <Button className="mt-4" onClick={() => setEditable(!editable)}>
        {editable ? "Done" : "Edit"}
      </Button>
    </div>
  );
};

export default ParagraphTextField;
