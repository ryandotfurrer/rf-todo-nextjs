"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Home() {
  const [taskComplete, setTaskComplete] = useState(false);

  const completeTask = () => {
    setTaskComplete(!taskComplete);
    console.log(taskComplete);
  };

  const taskStyles = taskComplete
    ? "line-through text-muted-foreground"
    : "text-foreground";

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
            <Input type="text" placeholder="Add a task" />
            <Button>Add task</Button>
          </form>
          <ul id="task-list" className="pt-8">
            <li
              onClick={completeTask}
              className={`cursor-pointer ${taskStyles}`}
            >
              task
            </li>
            <li
              onClick={completeTask}
              className={`cursor-pointer ${taskStyles}`}
            >
              completed task
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
