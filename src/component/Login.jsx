import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;
const Login = () => {
  const Stl = styled.div`
    display: flex;
    justify-content: center;
    line-height: 0.2vh;
    button.btn {
      background-color: black;
      color: white;
      border: none;
      border-radius: 5vw;
      font-weight: 500;
      font-size: 1rem;
      margin: 0 35%;
      min-width: 5vw;
      min-height: 5vh;
    }
    input {
      padding-left: 1vw;
      min-width: 15vw;
      min-height: 4vh;
      border-radius: 5vw;
      border: 1px solid black;
      outline: none;
    }
  `;
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://sql-dev-india.thewitslab.com:3003/auth/login",
        data
      );

      console.log("res :>> ", res);
      console.log("User Login SuccessFully");

      if (res.status === 200) {
        navigate("/login");
        localStorage.setItem("user", JSON.stringify(res));
        localStorage.setItem("token", JSON.stringify(res.token));
      } else {
        navigate("/");
        alert("not registered");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <H1>Login Form</H1>

      <Stl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className="form"
            autoComplete="off"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          <p>{errors.email?.message}</p>
          {/* <br /> */}
          <input
            type="password"
            placeholder="Password"
            className="form"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          {/* <br /> */}
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </Stl>
    </div>
  );
};

export default Login;
