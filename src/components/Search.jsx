import {useState}  from "react";
// import Card from './Card'
export const Search = ({ characters}) => {
  
  const[ search, setSearch] = useState('')
  return (
    <>
    <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e=> setSearch(e.target.value)}
            />
        </div>
      </nav>
    </>
  );
};
