// App.jsx
import { useState } from "react";
import CreateCard from "./components/ind";
import Toast from "./components/Toast";

function App() {
  const [val, setVal] = useState({ check: false });
  const [cards, setCards] = useState([]);
  const [login, setLogin] = useState(false);
  const [notifVal, setNotifVal] = useState(false);

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
    if (!val.check) return;

    setLogin(true);
    setCards([...cards, val]);
    resetInputs();
    setNotifVal(true);

    setTimeout(() => {
      setNotifVal(false);
    }, 2000);
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
      {notifVal && (
        <Toast
          message="Successfully created!"
          type="success"
          position="C"
          duration="2s"
          showProgress={true}
        />
      )}

      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left side */}
        <section className="w-full lg:w-3/5 bg-gray-800 flex justify-center p-6">
          <div className="text-white flex flex-wrap w-full md:w-3/4 gap-6">
            {[
              {
                id: "first-name",
                label: "First Name",
                type: "text",
                placeholder: "Enter your first name",
              },
              {
                id: "last-name",
                label: "Last Name",
                type: "text",
                placeholder: "Enter your last name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter your Email",
              },
              {
                id: "Title",
                label: "Title",
                type: "text",
                placeholder: "What is your job Title?",
              },
              {
                id: "company",
                label: "Company name",
                type: "text",
                placeholder: "Where do you work?",
              },
            ].map((field) => (
              <div key={field.id} className="w-full md:w-[48%] flex flex-col">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  onChange={handleValue}
                  type={field.type}
                  className="px-2 py-3 rounded-md border border-gray-400"
                  id={field.id}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            {/* Company size */}
            <div className="w-full md:w-[48%] flex flex-col">
              <label htmlFor="company-size">Company size</label>
              <select
                onChange={handleValue}
                id="company-size"
                className="px-2 py-3 rounded-md border border-gray-400"
              >
                <option defaultValue="">Select</option>
                <option value="1-3">1 to 3</option>
                <option value="4-8">4 to 8</option>
                <option value="8-12">8 to 12</option>
                <option value="12-20">12 to 20</option>
                <option value="20">more 20</option>
              </select>
            </div>

            {/* Textarea */}
            <div className="w-full flex flex-col">
              <label htmlFor="text-ar">
                What are you hoping to learn about?
              </label>
              <textarea
                onChange={handleValue}
                className="h-[140px] px-2 py-3 rounded-md border border-gray-400"
                id="text-ar"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 w-full">
              <input
                onClick={handleValue}
                id="check-box"
                className="w-5 h-5 rounded-md"
                type="checkbox"
              />
              <label htmlFor="check-box">
                I would like to receive emails about future web
              </label>
            </div>

            {/* Button */}
            <button
              onClick={addHandle}
              className="w-full md:w-5/6 bg-white text-black py-4 px-6 rounded-md hover:bg-gray-200 transition"
            >
              Register for this Event
            </button>
          </div>
        </section>

        {/* Right side */}
        <section className="w-full lg:w-2/5 bg-gray-700 flex flex-wrap justify-center p-4">
          {login && cards.map((e, id) => <CreateCard key={id} card={e} />)}
        </section>
      </div>
    </>
  );
}

export default App;
