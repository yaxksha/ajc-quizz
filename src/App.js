import logo from "./logo.svg";
import "./App.css";
import Quizz from "./components/Quizz";
import { Questions } from "./datas/Questions";

function App() {
  const max = Questions.length;
  let random = Math.floor(Math.random() * max);
  // console.log(random);
  return (
    <body>
      <Quizz random={random} />
    </body>
  );
}

export default App;
