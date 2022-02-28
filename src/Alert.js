import React, { useEffect } from "react";

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      style={{ paddingLeft: "150px", borderRadius: "5px" }}
      className={`alert-${type}`}
    >
      {msg}
    </p>
  );
}
export default Alert;
