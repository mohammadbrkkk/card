import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-w-screen min-h-screen  bg-gray-400">
      <h1 className="text-center pt-20 text-4xl">
        404 Not Found
        <br />
        <br />
        <Link
          className="text-center bg-red-400 px-5 py-2 rounded-md border-1 text-white "
          to="/"
        >
          return{" "}
        </Link>
      </h1>
    </div>
  );
};
export default NotFound;
