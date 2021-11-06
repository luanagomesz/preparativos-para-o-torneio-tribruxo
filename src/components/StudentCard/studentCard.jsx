import { useState } from "react";
import GriffindorCard from "./House-Cards/Gryffindor-card";
import SlytherynCard from "./House-Cards/Slytheryn-card";
import HufflepuffCard from "./House-Cards/Hufflepuff-card";
import RavenclawCard from "./House-Cards/Ravenclaw-card";
import GravestoneCard from "./House-Cards/Gravestone-card";

function StudentCard({ student }) {
  return student.alive === true ? (
    student.house === "Gryffindor" ? (
      <GriffindorCard student={student} />
    ) : student.house === "Slytherin" ? (
      <SlytherynCard student={student} />
    ) : student.house === "Hufflepuff" ? (
      <HufflepuffCard student={student} />
    ) : student.house === "Ravenclaw" ? (
      <RavenclawCard student={student} />
    ) : (
      ""
    )
  ) : (
    <GravestoneCard student={student} />
  );
}

export default StudentCard;
