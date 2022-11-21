import React from "react";
import Delettask from "../Delettask/Delettask";
import Tasktitle from "../Shared/Tasktitle/Tasktitle";
import "./Listoftasks.css";
import { useQuery } from "@tanstack/react-query";
const axios = require("axios").default;

function Listoftasks({ data, isLoading, error }) {
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="card-body">
      <Tasktitle
        imgurl="https://www.downloadclipart.net/large/list-png-transparent-image.png"
        tasktitle="List of tasks"
        width_img="50"
      />
      <table class="table">
        <tbody>
          <tr>
            <td>
              <h1>{data?.length}</h1>
            </td>
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
