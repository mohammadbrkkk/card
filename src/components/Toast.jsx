const Toast = () => {
  return (
    <>
      <div className="fixed top-5 left-3/6 -translate-x-3/6">
        <h1 className="py-5 px-15 rounded-t-lg text-white shadow-sm  bg-green-800">
          Successfully created!
        </h1>
        <div className=" h-1  not bg-red-800 w-full "></div>
      </div>
    </>
  );
};

export default Toast;
