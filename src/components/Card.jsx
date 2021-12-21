import {useState} from 'react'
import {Modal} from '../components/Modal/Modal'

const Card = ({ characters, characterStatic, setCharacters, search,setSearch}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)
  } 

  const filter = (itemSearch)=>{
    let results = characterStatic.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(itemSearch.toLowerCase())){
        return element 
      }
      return setCharacters(results)
    })
  }
    const edited = () =>{
      setOpenModal(true)
    }
  
  
    return(
    <>
     <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
        
            <input
              value={search}
              className="form-control me-2"
              onChange={handleChange}
            />
        </div>
      </nav>

      <div class="row row-cols-1 row-cols-md-5 g-4 mt-2">
        { characters.map((character) => (
          <div className="col">
            <div className="card h-100" key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img img-fluid rounded mx-auto d-block"
                alt=" super heroes de marvel "
              />
              <div
                className="card-body d-flex flex-column justify-content-end"
                
              >
                <h2 className="card-title h5">{character.name}</h2>
                <p className="card-text">{character.description ? character.description : 'No found' }</p>
                <p className="card-text">{character.modified.split("T")[0].split("-").join('/')}</p>
                <button type="button" className="btn btn-danger" onClick={edited}>
                  Danger
                </button>
              </div>
              {openModal && <Modal/>}
            </div>
          </div>
        ))}
      </div>


    </>
  );
};
export default Card;
