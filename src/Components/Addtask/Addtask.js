import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Tasktitle from "../Shared/Tasktitle/Tasktitle";
import NotificationSound from "./confirm-sound.mp3";
import { toast } from "react-toastify";

function Addtask({ refetch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const audioPlayer = useRef(null);
  function playAudio() {
    audioPlayer.current.play();
  }

  const onSubmit = (data) => {
    const todotitle = data.todotitle;
    const tododescription = data.tododescription;

    fetch("http://localhost:5000/addtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todotitle: todotitle,
        tododescription: tododescription,
        status: "create",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast("Todo Added Sucessfully");
    playAudio();
    refetch();
  };

  return (
    <section className="card-body">
      <Tasktitle
        imgurl="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
        tasktitle="Add Task"
      />

      {/* <button onClick={playAudio}>Play</button> */}
      <audio ref={audioPlayer} src={NotificationSound} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="todo 1"
          {...register("todotitle", { required: true })}
          aria-invalid={errors.todotitle ? "true" : "false"}
          className="form-control"
        />

        <textarea
          {...register("tododescription")}
          className="form-control my-4"
          placeholder="Todo Details"
        />
        <input type="submit" className="btn btn-outline-primary " />
      </form>
      <p>
        {errors.todotitle?.type === "required" && (
          <p role="alert">Todo Title is required</p>
        )}
      </p>
    </section>
  );
}

export default Addtask;
