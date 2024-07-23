"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { setItem, getTask, removeTask } from "@/utils/localStorage";

export default function Home() {
  const [task, setTask] = useState({});

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedTasks = getTask("myTasks");
    if (storedTasks) {
      setTask(storedTasks);
    }
  }, []);

  // const handleSaveData = () => {
  //   const newTask = { example: "value" };
  //   setItem("myData", JSON.stringify(newTask));
  //   setTask(newTask);
  // };

  return (
    <>
      <header className="py-20">
        <h1>RF To Do</h1>
        <p>A basic to do app built to practice React useState and ContextAPI</p>
      </header>
      <main>
        <section className="to-do-input-section">
          <h2>To Dos</h2>
          <form className="flex gap-4">
            <label htmlFor="task" className="sr-only">
              Task
            </label>
            <Input type="text" id="task" placeholder="Add a task" />
            <Button
              onClick={() => {
                const newTask = { example: "value" };
                setItem("myData", JSON.stringify(newTask));
              }}
            >
              Add task
            </Button>
          </form>
          <ul>
            {Object.keys(task).map((key) => (
              <li key={key} className="flex gap-4">
                <span>{key}</span>
                <Button onClick={() => removeTask(key)}>Remove</Button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
