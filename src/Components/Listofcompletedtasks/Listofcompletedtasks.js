import React from "react";
import Delettask from "../Delettask/Delettask";
import Tasktitle from "../Shared/Tasktitle/Tasktitle";
import "./Listofcompletedtasks.css";
import taskimage from "./task_complete.png";
function Listofcompletedtasks() {
  return (
    <div className="">
      <div className="text-center pt-3 pb-2">
        <Tasktitle tasktitle="Completed Tasks" imgurl={taskimage} />
        <ul class="list-group">
          <li class="list-group-item">
            Dapibus ac facilisis in <Delettask delet_id="2Delettttttttt" />
          </li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
}

export default Listofcompletedtasks;
