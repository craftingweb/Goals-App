import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
};
export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
