import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://glacial-retreat-12345.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added succesfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service ">
      <h2> please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("description")} placeholder="description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
