"use client";
import React, { useEffect, useState } from "react";

export default function Todo({ todoNum }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoNum}`, {
    //   cache: "no-store", // It will call te API everytime te paje loads
      cache: "force-cache", // It will call te API one time and save it in te local device and everytime te user restarts te paje we will jet te data from te cached data
      next: {
        revalidate: 60, // Will update te cached data one time every 60 seconds
      }
    })
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return <div>{JSON.stringify(todo)}</div>;
}
