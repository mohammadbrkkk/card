import { useState } from "react";
import CreateCard from "./components/ind";

function App() {
  const [val, setVal] = useState({ check: false });
  const [cards, setCards] = useState([]);
  const [login, setLogin] = useState(false);
  const [notifVal, setNotifVal] = useState(false);
  const [duplicate, setDuplicate] = useState(true);

  // function handle input value
  const handleValue = (e) => {
    // check input not empty
    if (e.target.value === "") {
      e.target.classList.add("border-red-600");
    } else {
      e.target.classList.remove("border-red-600");
    }
    // input id
    let key = e.target.id;
    // checked input
    if (key === "check-box") {
      e.target.checked
        ? setVal({ ...val, check: true })
        : setVal({ ...val, check: false });
    }
    // add input value to object
    switch (key) {
      case "first-name":
        setVal({ ...val, name: e.target.value });
        break;
      case "last-name":
        setVal({ ...val, lastName: e.target.value });
        break;
      case "email":
        setVal({ ...val, Email: e.target.value });
        break;
      case "Title":
        setVal({ ...val, Title: e.target.value });
        break;
      case "company":
        setVal({ ...val, company: e.target.value });
        break;
      case "company-size":
        setVal({ ...val, companySize: e.target.value });
        break;
      case "text-ar":
        setVal({ ...val, Comment: e.target.value });
        break;
      default:
        break;
    }
  };
  // submit card
  const addHandle = () => {
    if (duplicate) {
      if (!val.check) {
        return;
      }
      setLogin(true);
      setCards([...cards, val]);
      setNotifVal(true);
      setDuplicate(false);
      setTimeout(() => {
        setDuplicate(true);
        setNotifVal(false);
      }, 2000);
    }
    return;

    // checked input check
  };
  return (
    <>
      {/* Toast Notification */}
      {notifVal && (
        <div className="fixed   top-5 left-3/6 -translate-x-3/6">
          <h1 className="py-5 px-15 rounded-t-lg text-white shadow-sm  bg-green-800">
            Successfully created!
          </h1>
          <div className=" h-1  not bg-red-800 w-full "></div>
        </div>
      )}
      {/* */}

      <div className="w-screen min-h-screen flex">
        {/* left side  */}
        <section className=" flex-3/5 bg-gray-800 flex justify-center">
          <div className="text-white flex flex-wrap w-3/4 mt-25 gap-8 h-fit ">
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="first-name">First Name</label>
              <input
                onChange={handleValue}
                type="text"
                className="px-2 py-4 r  ounded-md border-gray-400 border-1"
                id="first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="last-name">Last Name</label>
              <input
                onChange={handleValue}
                type="text"
                className="px-2 py-4 rounded-md border-gray-400 border-1"
                id="last-name"
                placeholder="Enter your last name"
              />
            </div>
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleValue}
                type="email"
                className="px-2 py-4 rounded-md border-gray-400 border-1"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="Title">Title</label>
              <input
                onChange={handleValue}
                type="text"
                className="px-2 py-4 rounded-md border-gray-400 border-1"
                id="Title"
                placeholder="What is your job Title ? "
              />
            </div>
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="company">Company name</label>
              <input
                onChange={handleValue}
                type="text"
                className="px-2 py-4 rounded-md border-gray-400 border-1"
                id="company"
                placeholder="Where do you"
              />
            </div>
            <div className="w-full lg:w-2/5 flex  flex-col">
              <label htmlFor="company-size">Company size</label>
              <select
                onChange={handleValue}
                id="company-size"
                className="px-2 py-4 rounded-md border-gray-400 border-1"
              >
                <option selected>select</option>
                <option value="1-3">1 to 3</option>
                <option value="4-8">4 to 8</option>
                <option value="8-12">8 to 12</option>
                <option value="12-20">12 to 20</option>
                <option value="20">more 20</option>
              </select>
            </div>
            <div className=" w-5/6  flex  flex-col">
              <label htmlFor="text-ar">
                What are you hoping to learn about?
              </label>
              <textarea
                onChange={handleValue}
                className="h-55 px-2 align-text-top py-4 rounded-md border-gray-400
                border-1"
                name=""
                id="text-ar"
              ></textarea>
            </div>
            <div className="flex  gap-2">
              <input
                onClick={handleValue}
                id="check-box"
                className="w-5 rounded-md"
                type="checkbox"
              />
              <label id="check-box">
                I whould like to receive emails about future web
              </label>
            </div>
            <button
              onClick={addHandle}
              className="w-5/6 bg-white text-black text-shadow-lg py-5 px-12 rounded-md"
            >
              Register for this Event
            </button>
          </div>
        </section>
        {/* right side  */}
        <section className="flex  flex-2/5 bg-gray-700 flex-wrap  justify-center">
          {/* create card  */}
          {login &&
            cards.map((e, id) => {
              return <CreateCard key={id} card={e}></CreateCard>;
            })}
        </section>
      </div>
    </>
  );
}
export default App;
