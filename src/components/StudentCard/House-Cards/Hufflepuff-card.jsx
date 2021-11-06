import hufflepuff from "./houses-img/Hufflepuff.png";
import StudentActions from "../../StudentActions/studentActions";
function HufflepuffCard({ student }) {
  return (
    <div className="hufflepuff-card">
      <div className="border-yellow">
        <h1>{student.name}</h1>
        <img
          src={student.image.replace("http://", "https://")}
          alt=""
          srcset=""
        />
      </div>
      <h2>{student.house}</h2>
      <img src={hufflepuff} alt="" className="house" />
    </div>
  );
}

export default HufflepuffCard;
