import { useState } from "react";

//Trabalho em andamento, não esta sendo usado no momento//
function StudentActions({ student }) {
  const respostadados = [
    "Tropeçou e quebrou a varinha",
    "Dessenterrou uma Mandrágora",
    "Adotou o Perebás",
    "se perdeu no labirinto",
    "quase se afogou no lago",
    "Adotou o Biguço",
    "teve uma briga psicologica com um bixo-papão e venceu",
    "lutou com a Aragogue nada de fobia",
    "Lutou com a Ballisco e aprendeu a lingua das cobras",
    "Superou os Grindylows",
    "Conseguiu o Ovo Dourado",
    "Derrotou um Comensal da morte",
    "encontrou Belatriz Lestrange e a derrotou",
    "Derrotou Voldemort",
  ];
  const [score, setScore] = useState(0);
  const [display1, setDisplay1] = useState("display-none");
  const [display2, setDisplay2] = useState("display-none");
  const [display3, setDisplay3] = useState("display-none");
  const randomNumber = () =>
    Math.floor(Math.random() * respostadados.length) + 0;
  const [FirstRoll, SetFirstRoll] = useState(null);
  const [SecondRoll, SetSecondRoll] = useState(null);
  const [ThirdRoll, SetThirdRoll] = useState(null);

  const RollDice1 = () => {
    SetFirstRoll(randomNumber());
    setScore(score + FirstRoll);
  };
  const RollDice2 = () => {
    SetSecondRoll(randomNumber());
    setScore(score + SecondRoll);
  };
  const RollDice3 = () => {
    SetThirdRoll(randomNumber());
    setScore(score + ThirdRoll);
  };

  return (
    <div className="container-card-actions">
      <h1>{student.name}</h1>
      <p>clique nos botões para rodar os dados do participante</p>
      <button
        onClick={() => {
          RollDice1();
          setDisplay1("container-Result");
        }}
      >
        Rodar dado!
      </button>
      <div className={display1}>
        <h2>{respostadados[FirstRoll]}</h2>
      </div>

      <button
        onClick={() => {
          RollDice2();
          setDisplay2("container-Result");
        }}
      >
        Rodar dado!
      </button>
      <div className={display2}>
        <h2>{respostadados[SecondRoll]}</h2>
      </div>

      <button
        onClick={() => {
          RollDice3();
          setDisplay3("container-Result");
        }}
      >
        Rodar dado!
      </button>
      <div className={display3}>
        <h2>{respostadados[ThirdRoll]}</h2>
      </div>
      <h2>Pontuação total:{score}</h2>
    </div>
  );
}

export default StudentActions;
