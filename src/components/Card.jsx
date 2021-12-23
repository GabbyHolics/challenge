import { useState } from "react";
import { Modal } from "../components/Modal/Modal";

export  const Card = ({ characters}) => {
  const [edited, setEdited] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const changeProp = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div class="row row-cols-1 row-cols-md-5 g-4 mt-2">
        {characters&& characters.map((character) => (
          <div className="col">
            <div className="card h-100" key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img img-fluid rounded mx-auto d-block"
                alt=" super heroes de marvel "
              />
              <div className="card-body d-flex flex-column justify-content-end">
                <h2 className="card-title h5">{character.name}</h2>
                <p className="card-text">
                  {character.description ? character.description : "No found"}
                </p>
                <p className="card-text">
                  {character.modified.split("T")[0].split("-").join("/")}
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={changeProp}
                >
                  Danger
                </button>
              </div>
              {openModal && <Modal edited={edited} setEdited={setEdited}
              
               />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

