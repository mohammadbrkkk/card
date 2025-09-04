// create card and show in UI
const CreateCard = () => {
  // const {
  //   name = "none",
  //   lastName = "none",
  //   Email = "none",
  //   Title = "none",
  //   company = "none",
  //   companySize = "none",
  //   Comment = "none",
  // } = card;

  return (
    <>
      <div className=" flex m-5 w-2/5 h-80  bg-amber-50 rounded-md shadow-2xl ">
        <div className="flex flex-col items-center w-full mt-2.5">
          <h1 className="t font-extrabold">john Doe </h1>
          <p className="">mohammadbrk4444@gmail.com</p>
          <div className="mt-5">
            <div className="mx-2 mb-2">
              <span className=" font-extrabold">Job Title: </span>
              <span>senior produact manager</span>
            </div>
            <div className="mx-2 mb-2">
              <span className="font-extrabold">Company : </span>
              <span>dasdas daskodjasosa </span>
            </div>
            <div className="mx-2 mb-2">
              <span className="font-extrabold">Company : </span>
              <span>1/3 employes</span>
            </div>
            <div className="mt-10 mx-2">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Error, neque beatae rem rerum harum deleniti. ""
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateCard;
