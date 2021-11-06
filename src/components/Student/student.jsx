import { useState } from "react/cjs/react.development";
import StudentCard from "../StudentCard/studentCard";
function SetStudentsDuel({ students, showResult, displayCards }) {
  const [firstMage, setFirstMage] = useState(
    Math.floor(Math.random() * 10) + 0
  );
  const [secondMage, setSecondMage] = useState(
    Math.floor(Math.random() * 10) + 0
  );
  const [thirdMage, setThirdMage] = useState(
    Math.floor(Math.random() * 10) + 0
  );

  const findTheSecondMage = (char) => {
    if (char[secondMage].house === char[firstMage].house) {
      setSecondMage(Math.floor(Math.random() * 10) + 0);
    }
  };
  const findTheThirdMage = (char) => {
    if (
      char[thirdMage].house === char[firstMage].house ||
      char[thirdMage].house === char[secondMage].house
    ) {
      setThirdMage(Math.floor(Math.random() * 10) + 0);
    }
  };

  const [winner, SetWinner] = useState([]);

  if (students.length > 6) {
    findTheSecondMage(students);
    findTheThirdMage(students);
  }
  if (
    (displayCards == "display-none" && winner.length < 1) ||
    (displayCards == "display-none" && winner.alive === false)
  ) {
    let arr = [students[firstMage], students[secondMage], students[thirdMage]];
    SetWinner(arr[Math.floor(Math.random() * 2) + 0]);
  }

  return (
    <div className="container">
      {students.length > 0 &&
      firstMage !== undefined &&
      secondMage !== undefined &&
      thirdMage !== undefined ? (
        <div>
          <div className={displayCards}>
            <StudentCard student={students[firstMage]} />
            <div className="separador"></div>
            <StudentCard student={students[secondMage]} />
            <div className="separador"></div>
            <StudentCard student={students[thirdMage]} />
            <div className="separador"></div>
          </div>
          <div className={showResult}>
            <h1>{winner.name} Venceu o torneio!</h1>
            <img src={winner.image} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SetStudentsDuel;
