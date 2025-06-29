// /app/lib/definitions.ts

// Admin or system-level user (optional)
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// App users — people who log their workouts
export type FitnessUser = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

// A single workout entry
export type Workout = {
  id: string;
  user_id: string;
  type: string; // e.g., 'Running', 'Yoga'
  duration_minutes: number;
  calories_burned: number;
  date: string;
};

// Monthly calorie trends
export type CaloriesByMonth = {
  month: string;
  calories: number;
};

// For latest workouts shown in UI
export type LatestWorkout = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  type: string;
  duration: string;
  calories: string;
  date: string;
};

// Raw data before formatting (e.g., duration or calories as numbers)
export type LatestWorkoutRaw = Omit<LatestWorkout, 'duration' | 'calories'> & {
  duration: number;
  calories: number;
};

// For the table UI combining workouts + user info
export type WorkoutsTable = {
  id: string;
  user_id: string;
  name: string;
  email: string;
  image_url: string;
  type: string;
  duration_minutes: number;
  calories_burned: number;
  date: string;
};

// Stats summary per user (like invoices per customer before)
export type FitnessUserStats = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_workouts: number;
  total_duration: number;
  total_calories: number;
};

// Same as above, but duration/calories formatted as strings for UI
export type FormattedFitnessUserStats = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_workouts: number;
  total_duration: string;
  total_calories: string;
};

// Select dropdown or filter type
export type FitnessUserField = {
  id: string;
  name: string;
};

// Form to create/edit a workout log
export type WorkoutForm = {
  id: string;
  user_id: string;
  type: string;
  duration_minutes: number;
  calories_burned: number;
};
