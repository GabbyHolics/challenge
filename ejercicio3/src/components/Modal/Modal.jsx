import React from 'react'
import './Modal.css'
export const Modal = ({characters, edited, setEdited}) => {
  const actually = (e) =>{
    setEdited(e.target.value)
   
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modal-container">
          <div className="modal-content">
          <form>
              <div className="mb-3">
                <label className="form-label">
                 Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value = {edited}
                  onChange={actually}
                />
                <div  class="form-text">
                 Escribe el nombre de tu super 
                </div>
              </div>
              <div clasName="mb-3">
                <label  className="form-label">
                 Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-danger">
                Listo 
              </button>
            </form> 
          </div>
        </div>
      </div>
    </>
  );
};
