import slytherin from "./houses-img/Slytherin.png";
import StudentActions from "../../StudentActions/studentActions";
function SlytherynCard({ student }) {
  return (
    <div className="slytheryn-card">
      <div className="border-green">
        <h1>{student.name}</h1>
        <img src={student.image} alt="" srcset="" />
      </div>
      <h2>{student.house}</h2>
      <img src={slytherin} alt="" className="house" />
    </div>
  );
}

export default SlytherynCard;
