import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Logout() {
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
    margin: 0 50%;
    min-width: 5vw;
    min-height: 5vh;
  `;
  const Data = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <div className="container">
      <Data className="data">
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
        <p>{data.city}</p>
        <p>{data.state}</p>
      </Data>
      <Button>Logout</Button>
    </div>
  );
}

export default Logout;
