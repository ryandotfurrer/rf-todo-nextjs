"use client";

export default function Home() {
  function handleClick() {
    alert("Clicked");
  }

  return (
    <>
      <header className="py-20s">
        <h1>RF To Do</h1>
        <p>A basic to do app built to practice React useState and ContextAPI</p>
      </header>
      <main>
        <section className="to-do-input-section">
          <h2>To Dos</h2>
          <div className="flex gap-4">
            <label htmlFor="to-do-input" className="sr-only">
              task input
            </label>
            <input
              type="text"
              name="to-do-input"
              id="to-do-input"
              className="outline outline-outline py-1 px-2 rounded"
            />
          </div>
        </section>
        <section className="to-do-section">
          <h2>Tasks</h2>
          <ul id="task-list"></ul>
        </section>
      </main>
    </>
  );
}
