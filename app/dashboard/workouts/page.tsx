import { fetchWorkouts } from '@/app/lib/data';

export default async function WorkoutsPage() {
  const workouts = await fetchWorkouts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Workout History</h1>
      <ul className="space-y-4">
        {workouts.map((workout) => (
          <li
            key={workout.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <p><strong>Date:</strong> {workout.formatted_date}</p>
            <p><strong>Type:</strong> {workout.type}</p>
            <p><strong>Duration:</strong> {workout.duration_minutes} min</p> // ✅ correct
            <p><strong>Calories Burned:</strong> {workout.calories_burned}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
