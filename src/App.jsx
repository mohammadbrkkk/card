// App.jsx
import { useState } from "react";
import CreateCard from "./components/ind";
import Toast from "./components/Toast";
import Inputs from "./components/inputs";

function App() {
  const [val, setVal] = useState({ check: false });
  const [cards, setCards] = useState([]);
  const [login, setLogin] = useState(false);
  const [notifVal, setNotifVal] = useState(false);
  const [error, setError] = useState(false);
  const [checkInp, setCheckInp] = useState(true);

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
    if (notifVal || error) {
      return;
    }
    document.querySelectorAll("input, textarea, select").forEach((inp) => {
      if (inp.value === "" || inp.value === "Select") {
        inp.classList.add("border-red-600");
        setCheckInp(false);
      }

      if (!val.check || checkInp) {
        setError(true);
        return;
      }

      setLogin(true);
    });
    setCards([...cards, val]);
    resetInputs();
    setNotifVal(true);
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
        message="Successfully created!"
        type="success"
        position="C"
        duration="2"
        showProgress={true}
        setState={setNotifVal}
        state={notifVal}
      />

      <Toast
        message="error!"
        type="error"
        duration="2"
        showProgress={true}
        setState={setError}
        state={error}
      />

      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left side */}
        <Inputs handleValue={handleValue} addHandle={addHandle}></Inputs>

        {/* Right side */}
        <section className="w-full lg:w-2/5 bg-gray-700 flex flex-wrap justify-center p-4">
          {login && cards.map((e, id) => <CreateCard key={id} card={e} />)}
        </section>
      </div>
    </>
  );
}

export default App;
