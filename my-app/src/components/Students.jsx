import React from "react";
import { useParams } from "react-router-dom";


export default function Students() {
    const { id } = useParams();
  return (
    <>
      <h1>Students Details Page</h1>
      <p>Student Register number is {id}</p>
    </>
  );
}
