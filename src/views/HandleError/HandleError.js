import React from "react";
import { useForm } from "react-hook-form";

export default function HandleError() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input name="firstName" ref={register({ required: true })} />
        {errors.firstName && "First name is required"}
        <label>Last Name</label>
        <input name="lastName" ref={register({ required: true })} />
        {errors.lastName && "Last name is required"}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
