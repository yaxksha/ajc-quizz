import { useState } from "react";
import { Questions } from "../datas/Questions";

function Quizz(random) {
  const index = random.random; // je sais pas comment passer un nombre en props au lieu d'un objet :'(
  const [message, setMessage] = useState("");
  console.log(index);
  const handleSubmitTrue = (event) => {
    event.preventDefault();
    console.log("Submit !");
    const reponse = true;

    if (reponse == Questions[index].reponse) {
      setMessage("Bonne réponse");
    } else {
      setMessage("Mauvaise réponse");
    }
    console.log(message);
  };
  const handleSubmitFalse = (event) => {
    event.preventDefault();
    console.log("Submit !");
    const reponse = false;

    if (reponse == Questions[index].reponse) {
      setMessage("Bonne réponse");
    } else {
      setMessage("Mauvaise réponse");
    }
    console.log(message);
  };

  return (
    <main>
      <form>
        <p>{Questions[index].intitule}</p>
        <div>
          <button name="true" type="submit" onClick={handleSubmitTrue}>
            Vrai
          </button>
          <button name="false" type="submit" onClick={handleSubmitFalse}>
            Faux
          </button>
        </div>
        <span>{message}</span>
      </form>
    </main>
  );
}
export default Quizz;
