import { type ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
};
export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
