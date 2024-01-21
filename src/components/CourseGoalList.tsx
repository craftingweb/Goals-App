import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

type CourseGoalList = {
  goals: CGoal[];
};
export default function CourseGoalList({ goals }: CourseGoalList) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
