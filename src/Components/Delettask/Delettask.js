import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css'

const Delettask = ({ delet_id }) => {
  const delet_task = () => {
    alert("delet_task After Confirm Function");
    console.log("Helo");
  };
  const confirmdelet = (After_confirm_function) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => After_confirm_function(),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleDelet = (id) => {
    confirmdelet(delet_task);
  };
  return (
    <button onClick={() => handleDelet(delet_id)}>
      <i class="fa-sharp fa-solid fa-trash" style={{ fontSize: "22px" }}></i>
    </button>
  );
};

export default Delettask;
