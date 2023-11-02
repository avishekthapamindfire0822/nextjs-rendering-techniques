"use client";
import React, { useEffect, useState } from "react";

export default function CSRPage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/todos.json")
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return (
    <>
      <h1 className="text-2xl tracking-wide font-semibold p-4">
        Client Side Rendering - (CSR)
      </h1>
      <div>No Todos Fetched Yet</div>
    </>
  );
}
