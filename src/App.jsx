// App.jsx
import { useState } from "react";
import CreateCard from "./components/ShowCards";
import Toast from "./components/Toast";
import Inputs from "./components/inputs";
import SearchInput from "./components/searchInput";
function App() {
  const [val, setVal] = useState({ check: false });
  const [cards, setCards] = useState([]);
  const [filt, setFilt] = useState([]);
  const [login, setLogin] = useState(false);
  const [errorOpt, setErrorOpt] = useState({
    message: "Successfully created!",
    type: "success",
    state: false,
  });
  const handleValue = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("border-red-600");
    } else {
      e.target.classList.remove("border-red-600");
    }

    let key = e.target.id;
    if (key === "check-box") {
      setVal({ ...val, check: e.target.checked });
      return;
    }

    const map = {
      "first-name": "name",
      "last-name": "lastName",
      email: "Email",
      Title: "Title",
      company: "company",
      "company-size": "companySize",
      "text-ar": "Comment",
    };

    if (map[key]) {
      setVal({ ...val, [map[key]]: e.target.value });
    }
  };

  const addHandle = () => {
    if (errorOpt.state) {
      return;
    }
    let checkInput = true;
    document.querySelectorAll("input, textarea, select").forEach((inp) => {
      if (inp.id === "input-search") return;

      if (inp.value === "" || inp.value === "Select") {
        inp.classList.add("border-red-600");
        checkInput = false;
      }
    });
    if (!checkInput) {
      setErrorOpt({
        message: "Error: fill the input",
        type: "error",
        state: true,
      });
      return;
    }

    if (!val.check) {
      setErrorOpt({
        message: "Warning: You haven’t checked the box",
        type: "warning",
        state: true,
      });
      return;
    }
    setLogin(true);
    setCards([...cards, val]);
    resetInputs();
    setErrorOpt({
      message: "Successfully!",
      type: "success",
      state: true,
    });
    return;
  };
  const deletCard = (id) => {
    const newCard = cards.filter((e, i) => {
      return i !== id && e;
    });
    setCards(newCard);
  };
  const resetInputs = () => {
    setVal({ check: false });
    document.querySelectorAll("input, textarea, select").forEach((el) => {
      if (el.type === "checkbox") el.checked = false;
      else el.value = "";
    });
  };

  return (
    <>
      <Toast
        message={errorOpt.message}
        type={errorOpt.type}
        position="C"
        duration="2"
        showProgress={true}
        setState={setErrorOpt}
        state={errorOpt.state}
      />

      <div className="bg-gray-800 flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left side */}
        <Inputs handleValue={handleValue} addHandle={addHandle}></Inputs>

        {/* Right side */}
        <section className="w-full lg:w-2/5 bg-gray-700 flex flex-wrap justify-center p-4">
          {/* search bar */}
          <SearchInput
            cards={cards}
            setFilt={setFilt}
            setLogin={setLogin}
          ></SearchInput>
          {/* cards */}
          {login &&
            cards.map((e, id) => (
              <CreateCard key={id} id={id} onClick={deletCard} card={e} />
            ))}
          {!login && filt.map((e, id) => <CreateCard key={id} card={e} />)}
        </section>
      </div>
    </>
  );
}

export default App;
