import { useState } from "react";
import StudentCard from "../StudentCard/studentCard";
import VictoryCard from "./Victory";
function SetStudentsDuel({ students, showResult, displayCards }) {
  const firstMage = Math.floor(Math.random() * 10) + 0;

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

  const [winner, SetWinner] = useState(0);
  const [setWinner, setmages] = useState([firstMage, secondMage, thirdMage]);
  if (students.length > 6) {
    findTheSecondMage(students);
    findTheThirdMage(students);
    if (
      (winner !== firstMage && winner !== secondMage && winner !== thirdMage) ||
      students[winner].alive === false
    ) {
      SetWinner(setWinner[Math.floor(Math.random() * 2) + 0]);
    }
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
            <VictoryCard student={students[winner]} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SetStudentsDuel;
