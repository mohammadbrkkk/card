import { FaSearch } from "react-icons/fa";

const SearchInput = ({ cards, setLogin, setFilt }) => {
  const handleSearch = (e) => {
    e.target.classList.remove("border-red-600");

    const searchTerm = e.target.value.replace(/\s+/g, "").toLowerCase();
    let arr = cards.filter((card) => {
      let str = card.name + card.lastName;
      str.toLowerCase;
      return str.includes(searchTerm) && card;
    });
    if (searchTerm === "") {
      setLogin(true);
      arr = [];
      setFilt(arr);
    } else {
      setFilt(arr);
      setLogin(false);
    }
  };
  return (
    <>
      {/* search bar */}
      <div className="flex  items-center w-10/12 h-10 bg-white text-center">
        <label htmlFor="input-search">
          <FaSearch className="mx-5" size="2rem" />
        </label>
        <input
          onChange={handleSearch}
          id="input-search"
          className="w-full h-full border-black border-2 px-2"
          type="text"
        />
      </div>
    </>
  );
};
export default SearchInput;
