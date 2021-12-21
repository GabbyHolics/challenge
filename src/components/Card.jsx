import {useState} from "react";

const Card = ({ characters }) => {
  console.log(characters)
    return(
    <>
      <div class="row row-cols-1 row-cols-md-5 g-4 mt-2">
        {characters.map((character) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img img-fluid rounded mx-auto d-block"
                alt=" super heroes de marvel "
              />
              <div
                className="card-body d-flex flex-column justify-content-end"
                key={character.id}
              >
                <h2 className="card-title h5">{character.name}</h2>
                <p className="card-text">{character.description ? character.description : 'No found' }</p>
                <p className="card-text">{character.modified.split("T")[0].split("-").join('/')}</p>
                <button type="button" class="btn btn-danger">
                  Danger
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
};
export default Card;
// { characters.filter((val)=>{
//   if(val.length < 0){
//     return
//   }else if(val.name.toLowerCase().includes(setSearch.toLowerCase())){
//       return 
//   }
// })
// }