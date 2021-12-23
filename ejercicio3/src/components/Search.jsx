import { useEffect } from "react";
export const Search = ({
  characters,
  search,
  setSearch,
  setCharacters,
  charactersStatic,
}) => {
  useEffect(() => {
    if (search === "") {
      setCharacters(charactersStatic);
    }
    setCharacters(filter);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filter =
    characters &&
    characters.filter((item) => {
      const textApi = item.name.toLowerCase();
      if (textApi.indexOf(search) !== -1) {
        return item;
      }
    });

  return (
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
    </>
  );
};
