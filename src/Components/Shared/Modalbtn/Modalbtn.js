import React from "react";

function Modalbtn({ btn_text }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      {btn_text}
    </button>
  );
}

export default Modalbtn;
