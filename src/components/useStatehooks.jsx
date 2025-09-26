import { useState } from "react";

const useStatehooks = () => {
  const [val, setVal] = useState({
    name: "",
    lastName: "",
    Email: "",
    Title: "",
    company: "",
    companySize: "",
    Comment: "",
    check: false,
  });
  const [cards, setCards] = useState([]);
  const [filt, setFilt] = useState([]);
  const [login, setLogin] = useState(false);
  const [errorOpt, setErrorOpt] = useState({
    message: "Successfully created!",
    type: "success",
    state: false,
  });
  return {
    val,
    setVal,
    cards,
    setCards,
    filt,
    setFilt,
    login,
    setLogin,
    errorOpt,
    setErrorOpt,
  };
};
export default useStatehooks;
