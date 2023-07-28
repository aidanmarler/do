import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import Container from "./components/Container";
import Input from "./components/Input";
import Summary from "./components/Summary/Summary";
import Tasks from "./components/Tasks/Tasks";

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const storedTasks = Cookies.get("tasks");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Save tasks to cookies whenever tasks state changes
  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks), { expires: 365 });
  }, [tasks]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex justify-center m-15">
      <div className="flex flex-col items-center">

        <div className="flex justify-between items-center w-full m-5 mt-10">
          
          <button name="Aidan Marler" className="p-2 h-8 w-8 bg-sky-600 mx-14 hover:bg-sky-500 rounded-lg hover:scale-110 border border-slate-300 shadow-bl-s shadow-white hover:shadow-white hover:shadow-bl-h transition">
            <img src="src/assets/AM-logo.svg" className=""></img>
          </button>

          <p className="text-white text-3xl">Do</p>
          
          <button className="p-2 h-8 w-8 bg-rose-600 mx-14 hover:bg-rose-500 rounded-lg hover:scale-110 border border-slate-300 shadow-bl-s shadow-white hover:shadow-white hover:shadow-bl-h transition">
            <img src="src/assets/languages.svg" className=""></img>
          </button>
        
        </div>

        <div className="bg-zinc-700 border border-zinc-700 shadow-sol-in p-10 mb-14 mx-10 flex flex-col gap-7 sm:w-[640px] rounded-xl">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input handleSubmit={handleSubmit} />
          </Container>
          <Container title={"Tasks"}>
            <Tasks
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
