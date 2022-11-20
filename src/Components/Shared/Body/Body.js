import React from "react";
import Addtask from "../../Addtask/Addtask";
import Listofcompletedtasks from "../../Listofcompletedtasks/Listofcompletedtasks";
import Listofpendingtask from "../../Listofpendingtask/Listofpendingtask";
import Listoftasks from "./../../Listoftasks/Listoftasks";

function Body() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 card mask-custom my-5">
            <Addtask />
          </div>
          <div className="col-md-3 my-5">
            <Listoftasks />
          </div>
          <div className="col-md-3 my-5">
            <Listofpendingtask />
          </div>
          <div className="col-md-3   mask-custom my-5">
            <Listofcompletedtasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
