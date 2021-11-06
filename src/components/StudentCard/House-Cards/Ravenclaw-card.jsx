import ravenclaw from "./houses-img/Ravenclaw.png";
import StudentActions from "../../StudentActions/studentActions";
function RavenclawCard({ student }) {
  return (
    <div className="ravenclaw-card">
      <div className="border-blue">
        <h1>{student.name}</h1>
        <img src={student.image} alt="" srcset="" />
      </div>
      <h2>{student.house}</h2>
      <img src={ravenclaw} alt="" className="house" />
    </div>
  );
}

export default RavenclawCard;
