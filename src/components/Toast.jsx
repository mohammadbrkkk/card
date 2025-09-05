const Toast = ({
  message = "none",
  type = "success",
  duration = "2s",
  position = "C",
  showProgress = true,
  progressColor,
}) => {
  // change props value to standard
  const custom = {
    message,
    type,
    textColor: "text-white",
    duration,
    position,
    showProgress,
    rounded: "rounded-t-md",
    progressColor,
  };

  // if show progress false border change
  !custom.showProgress && (custom.rounded = "rounded-md");
  // set bg color , text color , Progress bar color
  switch (type) {
    case "success":
      custom.type = "bg-green-800";
      custom.progressColor = "bg-red-800";
      break;
    case "error":
      custom.type = "bg-red-500";
      custom.progressColor = "bg-red-300";
      break;
    case "warning":
      custom.type = "bg-yellow-500";
      custom.progressColor = "bg-yellow-300";
      custom.textColor = "text-black";
      break;
    case "info":
      custom.type = "bg-blue-500";
      custom.progressColor = "bg-blue-300";
      custom.textColor = "text-white";
      break;

    default:
      break;
  }
  // change toast position
  switch (position) {
    case "C":
      custom.position = " left-3/6 -translate-x-3/6 ";
      break;
    case "L":
      custom.position = " left-10 ";
      break;
    case "R":
      custom.position = " right-10  ";
      break;
  }
  progressColor && (custom.progressColor = progressColor);
  return (
    <>
      <div className={`fixed top-5 ${custom.position}`}>
        <h1
          className={`py-5 px-15 rounded-t-md ${custom.rounded}  ${custom.textColor} shadow-sm ${custom.type}`}
        >
          {message}
        </h1>
        {custom.showProgress && (
          <div
            style={{
              animationDuration: custom.duration,
            }}
            className={` h-1 not  ${custom.progressColor} w-full`}
          ></div>
        )}
      </div>
    </>
  );
};

export default Toast;
