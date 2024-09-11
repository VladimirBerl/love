import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("Ты любишь меня?");
  const [countNo, setCountNo] = useState(0);
  const [gif, setGif] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Меняем заголовок и gif при изменении countNo
    if (countNo === 1) {
      setTitle("Случайно?");
    } else if (countNo === 2) {
      setTitle("Ты писька");
    } else if (countNo >= 3) {
      setTitle("Пошел ты <===3");
      setGif("no");
      setIsFinished(true); // Завершаем опрос
    } else {
      setGif('start')
    }
  }, [countNo]);

  const handleClick = (e) => {
    const answer = e.target.innerText;

    if (isFinished) return; // Если опрос завершен, не обрабатываем

    if (answer === "Да") {
      setTitle("Я тебя тоже :3");
      setGif("yes");
      setIsFinished(true); // Завершаем опрос
    } else if (answer === "Нет") {
      setCountNo((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="container">
      <img className="gif" src={`/${gif}.gif`} alt="" />
      <h1 className="title">{title}</h1>
      <button disabled={isFinished} onClick={handleClick} className="btn-yes">
        Да
      </button>
      <button disabled={isFinished} onClick={handleClick} className="btn-no">
        Нет
      </button>
    </div>
  );
};

export default App;
