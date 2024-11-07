import "./App.css";
import Janken from "./Janken";
import { Title } from "./Title";
import { useState } from "react";

function App() {
  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);
  const [countDrow, setCountDrow] = useState(0);
  const [pc, setPc] = useState("null");
  const [judgement, setJudgement] = useState("null");
  return (
    <div className="App">
      <Title />
      <Janken
        judgement={judgement}
        setJudgement={setJudgement}
        countWin={countWin}
        setCountWin={setCountWin}
        countLose={countLose}
        setCountLose={setCountLose}
        countDrow={countDrow}
        setCountDrow={setCountDrow}
        pc={pc}
        setPc={setPc}
      />
    </div>
  );
}

export default App;
