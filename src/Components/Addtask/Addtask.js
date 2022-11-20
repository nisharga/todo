import React from "react";
import { useForm } from "react-hook-form";
import Tasktitle from "../Shared/Tasktitle/Tasktitle";

function Addtask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const todotitle = data.todotitle;
    const tododescription = data.tododescription;
    console.log(todotitle);
    console.log(tododescription);
  };

  //   console.log(watch("example"));
  //
  return (
    <section className="card-body">
      <Tasktitle
        imgurl="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
        tasktitle="Add Task"
      />

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
