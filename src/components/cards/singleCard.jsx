// import { useContext } from "react";
import { useContext } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { IdContext } from "../ContextId";

const SingleCard = () => {
  const card = useContext(IdContext);
  const { cardId } = useParams();
  !card[cardId] && <Navigate to="/" replace />;

  const { name, lastName, Email, Title, company, companySize, Comment } =
    card[cardId];
  console.log(card[cardId]);

  return (
    <>
      {card[cardId] && (
        <div className=" overflow-x-hidden justify-center text-center flex-wrap w-[80vw] lg:w-[30vw] backdrop-blur-sm text-2xl bg-white/20 border-4  h-[70vh] absolute left-[50%] translate-[-50%] top-[50%] p-5 flex gap-3 shadow-2xl">
          <h1 className="w-2/5">First Name : {name} </h1>
          <h1 className="w-2/5">Last Name : {lastName} </h1>
          <h1 className="w-2/5">Email : {Email} </h1>
          <h1 className="w-2/5">Job Title : {Title} </h1>
          <h1 className="w-2/5">Company Name : {company} </h1>
          <h1 className="w-2/5">Company Size : {companySize} employees </h1>
          <h1 className="w-full h-fit">comment : {Comment} </h1>
          <Link
            className="absolute bottom-1 left-[50%] translate-x-[-50%] bg-red-500 px-3 py-1 rounded-md"
            to="/"
          >
            return
          </Link>
        </div>
      )}
    </>
  );
};
export default SingleCard;
