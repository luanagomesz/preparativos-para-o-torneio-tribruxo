import gravestone from "./houses-img/gravestone.png";

function GravestoneCard({ student }) {
  const respostaMorto = [
    "Morreu no caminho :(",
    "Você sabe quem... pegou ele",
    "Morreu de emoção",
    "Um Dementador acabou com ele no caminho",
    "Morreu para um dragão Rabo-Córneo Húngaro",
    "um Dragão Verde-Galês levou o bruxo",
    "o Dragão Focinho-Curto Sueco era mais forte do que ele pensava",
    "Não sobreviveu o ataque dos Grindylows",
  ];

  return (
    <div className="deadCardFull">
      <div className="mage-card-dead">
        <img
          src={student.image.replace("http://", "https://")}
          alt=""
          srcset=""
        />
        <h1>{student.name}</h1>
        <h2>
          {" "}
          {respostaMorto[Math.floor(Math.random() * respostaMorto.length) + 0]}
        </h2>
      </div>
      <img src={gravestone} alt="" srcset="" className="gravestone" />
    </div>
  );
}

export default GravestoneCard;
