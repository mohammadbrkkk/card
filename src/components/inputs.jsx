import { useEffect, useRef } from "react";

const Inputs = ({ handleValue, addHandle }) => {
  const foc = useRef();
  useEffect(() => {
    foc.current.focus();
  }, []);
  return (
    <section className="w-full lg:w-3/5 lg:h-screen bg-gray-800 flex justify-center p-6">
      <div className="text-white flex flex-wrap w-full md:w-3/4 gap-6">
        {[
          {
            foc,
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
              ref={field.foc}
              onChange={handleValue}
              type={field.type}
              className="px-2 py-3 rounded-md border-2 border-gray-400"
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
            className="px-2 py-3 rounded-md border-2 border-gray-400"
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
          <label htmlFor="text-ar">What are you hoping to learn about?</label>
          <textarea
            onChange={handleValue}
            className="h-[140px] px-2 py-3 rounded-md border-2 border-gray-400"
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
    
  );
};
export default Inputs;
