import { useState } from "react";

const Toast = ({
  message = "none",
  type = "success",
  duration = "2s",
  position = "C",
  showProgress = true,
  progressColor,
}) => {
  const [content, setContent] = useState(true);
  setTimeout(() => {
    setContent(false);
  }, 2000);

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

  if (!custom.showProgress) custom.rounded = "rounded-md";

  switch (type) {
    case "success":
      custom.type = "bg-green-800";
      custom.progressColor = "bg-green-300";
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
      break;
  }

  switch (position) {
    case "C":
      custom.position = "left-1/2 -translate-x-1/2";
      break;
    case "L":
      custom.position = "left-5";
      break;
    case "R":
      custom.position = "right-5";
      break;
  }

  if (progressColor) custom.progressColor = progressColor;

  return (
    <>
      {content && (
        <div
          className={`fixed top-5 ${custom.position} w-[90%] max-w-sm md:max-w-md z-50`}
        >
          <h1
            className={`py-4 px-6 ${custom.rounded} ${custom.textColor} shadow-sm ${custom.type}`}
          >
            {message}
          </h1>

          {custom.showProgress && (
            <div
              style={{ animationDuration: custom.duration }}
              className={`h-1 w-full not ${custom.progressColor} rounded-b-md`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Toast;
