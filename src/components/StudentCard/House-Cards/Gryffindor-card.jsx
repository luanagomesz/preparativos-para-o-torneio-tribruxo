import gryffindor from "./houses-img/Gryffindor.png";
import StudentActions from "../../StudentActions/studentActions";
import { useState } from "react/cjs/react.development";
function GriffindorCard({ student }) {
  const [displayCard, SetDisplayCard] = useState("gryffindor-card");
  const [displayResult, SetDisplayResult] = useState("display-none");

  //  SetDisplayCard("display-none");   SetDisplayResult();

  return (
    <div>
      <div onClick={() => {}} className={displayCard}>
        <div className="border-red">
          <h1>{student.name}</h1>
          <img src={student.image} alt="" srcset="" />
        </div>
        <h2>{student.house}</h2>
        <img src={gryffindor} alt="" className="house" />
      </div>
      {/*<div className={displayResult}>
       <StudentActions student={student} /> 
      </div> */}
    </div>
  );
}

export default GriffindorCard;
