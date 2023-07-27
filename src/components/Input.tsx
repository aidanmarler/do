import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTask, setNewTaskName] = useState(""); // Initialize newTask and setNewTask to an empty string
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTask);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTask} // Set the input value to newTask
          onChange={(e) => setNewTaskName(e.target.value)} //Set newTask to the input value whenever the user types something
        />
      </div>
      <button
        type="submit"
        className="bg-green-100 rounded-lg hover:bg-green-300 p-1 transition"
      >
        Add task
      </button>
    </form>
  );
};

export default InputContainer;
