// create card and show in UI
const CreateCard = ({ card, key }) => {
  console.log(key);

  const {
    name = "none",
    lastName = "none",
    Email = "none",
    Title = "none",
    company = "none",
    companySize = "none",
    Comment = "none",
  } = card;

  return (
    <>
      <div className=" flex m-5 w-2/5 h-80  bg-white/30  rounded-md shadow-2xl ">
        <div className="flex flex-col items-center w-full mt-2.5">
          <h1 className="t font-extrabold">
            {name} {lastName}
          </h1>
          <p className="">{Email}</p>
          <div className="mt-5">
            <div className="mx-2 mb-2">
              <span className=" font-extrabold">Job Title: </span>
              <span>{Title}</span>
            </div>
            <div className="mx-2 mb-2">
              <span className="font-extrabold">Company : </span>
              <span>{company}</span>
            </div>
            <div className="mx-2 mb-2">
              <span className="font-extrabold">Company Size: </span>
              <span>{companySize} employes</span>
            </div>
            <div className="mt-10 mx-2">
              <p>{Comment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateCard;
