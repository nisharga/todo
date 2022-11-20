import React from "react";
import Delettask from "../Delettask/Delettask";
import Tasktitle from "../Shared/Tasktitle/Tasktitle";
import "./Listoftasks.css";

function Listoftasks() {
  return (
    <div className="card-body">
      <Tasktitle
        imgurl="https://www.downloadclipart.net/large/list-png-transparent-image.png"
        tasktitle="List of tasks"
        width_img="50"
      />
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>List Of Tasks</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Woke up early in the morning</td>
            <td>
              <Delettask delet_id="Delettttttttt" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Woke up early in the morning</td>
            <td>Woke up early in the morning</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Listoftasks;
