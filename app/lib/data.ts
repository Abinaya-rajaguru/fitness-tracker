// /app/lib/data.ts
import postgres from 'postgres';
import {
  Workout,
  WorkoutSummary,
  WorkoutForm,
} from './definitions';
import { formatCalories, formatDateToLocal } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: false }); // use `true` for deployed Postgres

// Fetch all workouts
// app/lib/data.ts
export async function fetchWorkouts() {
  try {
    return [
      {
        id: 'demo1',
        user_id: 'test_user',
        type: 'Running',
        duration_minutes: 30,
        calories_burned: '300 kcal',
        formatted_date: 'Jun 29, 2025',
      },
      {
        id: 'demo2',
        user_id: 'test_user',
        type: 'Yoga',
        duration_minutes: 45,
        calories_burned: '180 kcal',
        formatted_date: 'Jun 28, 2025',
      },
    ];
  } catch (error) {
    console.error('Mock fetch failed', error);
    throw new Error('Mock fetch failed.');
  }
}


// Fetch single workout by ID
export async function fetchWorkoutById(id: string) {
  try {
    const data = await sql<WorkoutForm[]>`
      SELECT id, user_id, date, duration_minutes, calories_burned, type
      FROM workouts
      WHERE id = ${id};
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workout.');
  }
}

// Fetch summary: total workouts, total duration, total calories
export async function fetchWorkoutSummary(): Promise<WorkoutSummary> {
  try {
    const result = await sql<{
      total_workouts: number;
      total_duration: number;
      total_calories: number;
    }[]>`
      SELECT
        COUNT(*) AS total_workouts,
        SUM(duration_minutes) AS total_duration,
        SUM(calories_burned) AS total_calories
      FROM workouts
    `;

    return {
      total_workouts: Number(result[0].total_workouts ?? 0),
      total_duration: Number(result[0].total_duration ?? 0),
      total_calories: formatCalories(result[0].total_calories ?? 0),
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workout summary.');
  }
}
