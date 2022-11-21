import React from "react";
import Addtask from "../../Addtask/Addtask";
import Listofcompletedtasks from "../../Listofcompletedtasks/Listofcompletedtasks";
import Listofpendingtask from "../../Listofpendingtask/Listofpendingtask";
import Listoftasks from "./../../Listoftasks/Listoftasks";
import { useQuery } from "@tanstack/react-query";

function Body() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/todos").then((res) => res.json()),
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 card mask-custom my-5">
            <Addtask refetch={refetch} />
          </div>
          <div className="col-md-3 my-5">
            <Listoftasks data={data} isLoading={isLoading} error={error} />
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
