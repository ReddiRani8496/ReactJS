import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Registration() {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter a username"),
    email: yup.string().email().required("Please enter your email address"),
    password: yup.string().required("Please enter password").min(8),
    confirm: yup
      .string()
      .required("Please enter a confirmation password")
      .oneOf([yup.ref("password"), null], "passwords must match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="username">Username:</label>
        <input type="text" id="username" {...register("username")} />
        <br />
        <span style={{ color: "red", fontSize: "10px", marginTop: "1px" }}>
          {errors.username?.message}
        </span>
        <br />
        <br />

        <label for="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        <br />
        <span style={{ color: "red", fontSize: "10px", marginTop: "1px" }}>
          {errors.email?.message}
        </span>
        <br />
        <br />

        <label for="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
        <br />
        <span style={{ color: "red", fontSize: "10px", marginTop: "1px" }}>
          {errors.password?.message}
        </span>
        <br />
        <br />

        <label for="confirm">Confirm Password:</label>
        <input type="password" id="confirm" {...register("confirm")} />
        <br />
        <span style={{ color: "red", fontSize: "10px", marginTop: "1px" }}>
          {errors.confirm?.message}
        </span>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Registration;
