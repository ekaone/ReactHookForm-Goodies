import React from "react";
import { useForm } from "react-hook-form";

export default function SelectName() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
        <input name="firstName" ref={register} />
        <label>Select Gender</label>

        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">No Stated</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
