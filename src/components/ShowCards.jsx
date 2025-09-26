// components/ShowCards.jsx
import { RxCross1 } from "react-icons/rx";
import { FaPenSquare } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import { useState } from "react";

const CreateCard = ({ id, card, del, edit }) => {
  const {
    name = "none",
    lastName = "none",
    Email = "none",
    Title = "none",
    company = "none",
    companySize = "none",
    Comment = "none",
  } = card;

  const [editedValue, setEditedValue] = useState({});
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setEditedValue({
      ...editedValue,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const updateValue = () => {
    edit({ ...card, ...editedValue }, id);
    setEditing(false);
  };

  const handleDelete = () => {
    del(id);
  };

  return (
    <>
      {!editing ? (
        <div className="relative overflow-hidden flex flex-col m-3 w-full sm:w-[48%] lg:w-2/5 h-80 bg-white/30 rounded-md shadow-2xl p-4">
          <RxCross1
            onClick={handleDelete}
            className="absolute cursor-pointer right-2 top-2 bg-red-500 text-white w-10 h-10"
          />
          <FaPenSquare
            onClick={() => setEditing(true)}
            className="absolute cursor-pointer right-2 bottom-2 bg-gray-600 text-white w-10 h-10"
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
            <div className="break-words mt-4 w-10/12">{Comment}</div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden flex flex-col m-3 w-full sm:w-[48%] lg:w-2/5 h-80 bg-white/30 rounded-md shadow-2xl p-4">
          <RxCross1
            onClick={() => setEditing(false)}
            className="absolute cursor-pointer right-2 top-2 bg-red-500 text-white w-10 h-10"
          />
          <FaSquareCheck
            onClick={updateValue}
            className="absolute cursor-pointer right-2 bottom-2 bg-black text-green-600 w-10 h-10"
          />
          <h1 className="font-extrabold text-lg space-x-2">
            <input
              className="inline w-1/3 border-0 outline-0 focus:ring-0 bg-transparent"
              value={editedValue.name ?? name}
              data-name="name"
              onChange={handleChange}
              type="text"
            />
            <input
              className="inline w-1/3 border-0 outline-0 focus:ring-0 bg-transparent"
              value={editedValue.lastName ?? lastName}
              data-name="lastName"
              onChange={handleChange}
              type="text"
            />
          </h1>
          <input
            className="inline w-4/6 border-0 outline-0 focus:ring-0 bg-transparent"
            value={editedValue.Email ?? Email}
            data-name="Email"
            onChange={handleChange}
            type="text"
          />
          <div className="mt-4 space-y-2">
            <div>
              <span className="font-extrabold">Job Title: </span>
              <input
                onChange={handleChange}
                className="inline w-4/6 border-0 outline-0 focus:ring-0 bg-transparent"
                data-name="Title"
                value={editedValue.Title ?? Title}
                type="text"
              />
            </div>
            <div>
              <span className="font-extrabold">Company: </span>
              <input
                className="inline w-4/6 border-0 outline-0 focus:ring-0 bg-transparent"
                value={editedValue.company ?? company}
                data-name="company"
                onChange={handleChange}
                type="text"
              />
            </div>
            <div>
              <span className="font-extrabold">Company Size: </span>
              <select
                className="px-2 py-1 rounded-md border-2 border-gray-400"
                value={editedValue.companySize ?? companySize}
                data-name="companySize"
                onChange={handleChange}
              >
                <option value="Select">Select</option>
                <option value="1-3">1 to 3</option>
                <option value="4-8">4 to 8</option>
                <option value="8-12">8 to 12</option>
                <option value="12-20">12 to 20</option>
                <option value="20">more 20</option>
              </select>
            </div>
            <div className="mt-4">
              <textarea
                className="h-[50px] px-2 py-1 rounded-md border-2 border-gray-400"
                value={editedValue.Comment ?? Comment}
                data-name="Comment"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCard;
