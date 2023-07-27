// src/components/Tasks/Tasks.tsx
import { Task } from "../../App";
import TaskItem from "./TaskItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Tasks = ({
  tasks,
  toggleDone,
  handleDelete,
}: {
  tasks: Task[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  const [listRef] = useAutoAnimate<HTMLDivElement>();
  const pendingTasks: Task[] = tasks.filter((t) => t.done === false);
  const completedTasks: Task[] = tasks.filter((t) => t.done === true);
  return (
    <div className="flex flex-col gap-2" ref={listRef}>
      {tasks.length ? (
        <>
          {pendingTasks.map((t) => (
            <TaskItem
              key={t.id}
              name={t.name}
              done={t.done}
              id={t.id}
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
          ))}
          {completedTasks.map((t) => (
            <TaskItem
              key={t.id}
              name={t.name}
              done={t.done}
              id={t.id}
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
          ))}
        </>
      ) : (
        <span className="text-green-100">No tasks yet!</span>
      )}
    </div>
  );
};

export default Tasks;
