import { useNavigate } from "react-router-dom";
import "./cestparti.css";

// eslint-disable-next-line react/prop-types
export default function CestParti({ selected }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    // si un restaurant a été choisie, affiche le bouton
    // au click du bouton, navigate vers la page menu
    <div className="container-lets-go">
      <button
        type="button"
        onClick={handleClick}
        className={selected ? "btn-lets-go" : "hide-btn-lets-go"}
      >
        C'est parti !
      </button>
    </div>
  );
}
