import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log("Error:", err);
  const { status, statusText } = err;
  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong</h2>
      <p>
        {status} : {statusText}
      </p>
    </div>
  );
}

export default Error;
