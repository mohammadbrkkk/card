// components/ind.jsx
import { RxCross1 } from "react-icons/rx";
const CreateCard = ({ id, card, onClick }) => {
  const {
    name = "none",
    lastName = "none",
    Email = "none",
    Title = "none",
    company = "none",
    companySize = "none",
    Comment = "none",
  } = card;

  const delet = () => {
    onClick(id);
  };
  return (
    <div className="relative overflow-hidden flex flex-col m-3 w-full sm:w-[48%] lg:w-2/5 h-80 bg-white/30 rounded-md shadow-2xl p-4">
      <RxCross1
        onClick={delet}
        className="absolute cursor-pointer right-2 top-2 bg-red-500 text-white w-10 h-10 "
      />
      <h1 className="font-extrabold text-lg">
        {name} {lastName}
      </h1>
      <p>{Email}</p>
      <div className="mt-4 space-y-2">
        <div>
          <span className="font-extrabold">Job Title: </span>
          <span>{Title}</span>
        </div>
        <div>
          <span className="font-extrabold">Company: </span>
          <span>{company}</span>
        </div>
        <div>
          <span className="font-extrabold">Company Size: </span>
          <span>{companySize} employees</span>
        </div>
        <div className="mt-4">
          <p>{Comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
