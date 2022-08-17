import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Logout() {
  let navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setData(data.data);
  }, []);
  const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 5vw;
    font-weight: 500;
    font-size: 1rem;
    padding: 1vw 1vw;
  `;
  const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24%;
    align-items: center;
    margin-top: 5vh;
    background-color: black;
    border-radius: 5vw;
    max-width: 50vw;

    span {
      font-size: 5vw;
      background-color: black;
    }

    P {
      color: white;
      text-transform: capitalize;
      background-color: black;
      font-weight: 500;
    }
  `;

  const [profile, setProfile] = useState(false);

  const Show = () => {
    setProfile(true);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const Container = styled.div`
    display: block;
  `;

  const Center = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2vw;
  `;
  return (
    <Container className="container">
      <Center>
        <Button onClick={Show}>Profile</Button>
        <h1>Welcome Narinder Singla</h1>
        <Button onClick={logout}>Logout</Button>
      </Center>
      {profile ? (
        <Data className="data">
          <span>👨‍🦱</span>
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Contact: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>City: {data.city}</p>
          <p>State: {data.state}</p>
        </Data>
      ) : null}
    </Container>
  );
}

export default Logout;
