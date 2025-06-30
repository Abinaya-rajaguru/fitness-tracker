const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@fitmail.com',
    password: '123456',
  },
];

const fitnessUsers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Alex Johnson',
    email: 'alex@fitness.com',
    image_url: '/users/alex-johnson.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Sarah Lee',
    email: 'sarah@fitness.com',
    image_url: '/users/sarah-lee.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'David Kim',
    email: 'david@fitness.com',
    image_url: '/users/david-kim.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Emily Carter',
    email: 'emily@fitness.com',
    image_url: '/users/emily-carter.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Michael Scott',
    email: 'michael@fitness.com',
    image_url: '/users/michael-scott.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Rachel Green',
    email: 'rachel@fitness.com',
    image_url: '/users/rachel-green.png',
  },
];

const workouts = [
  {
    user_id: fitnessUsers[0].id,
    type: 'Running',
    duration_minutes: 30,
    calories_burned: 300,
    date: '2024-12-06',
  },
  {
    user_id: fitnessUsers[1].id,
    type: 'Yoga',
    duration_minutes: 45,
    calories_burned: 180,
    date: '2024-11-14',
  },
  {
    user_id: fitnessUsers[4].id,
    type: 'Cycling',
    duration_minutes: 60,
    calories_burned: 550,
    date: '2024-10-29',
  },
  {
    user_id: fitnessUsers[3].id,
    type: 'Strength Training',
    duration_minutes: 50,
    calories_burned: 400,
    date: '2024-09-10',
  },
  {
    user_id: fitnessUsers[5].id,
    type: 'Swimming',
    duration_minutes: 40,
    calories_burned: 350,
    date: '2024-08-05',
  },
  {
    user_id: fitnessUsers[2].id,
    type: 'HIIT',
    duration_minutes: 30,
    calories_burned: 500,
    date: '2024-07-16',
  },
  {
    user_id: fitnessUsers[0].id,
    type: 'Running',
    duration_minutes: 20,
    calories_burned: 200,
    date: '2024-06-27',
  },
  {
    user_id: fitnessUsers[3].id,
    type: 'Walking',
    duration_minutes: 60,
    calories_burned: 240,
    date: '2024-06-09',
  },
  {
    user_id: fitnessUsers[4].id,
    type: 'Cycling',
    duration_minutes: 45,
    calories_burned: 430,
    date: '2024-06-17',
  },
  {
    user_id: fitnessUsers[5].id,
    type: 'Pilates',
    duration_minutes: 60,
    calories_burned: 300,
    date: '2024-06-07',
  },
  {
    user_id: fitnessUsers[1].id,
    type: 'Yoga',
    duration_minutes: 30,
    calories_burned: 150,
    date: '2024-08-19',
  },
  {
    user_id: fitnessUsers[5].id,
    type: 'Zumba',
    duration_minutes: 45,
    calories_burned: 400,
    date: '2024-06-03',
  },
  {
    user_id: fitnessUsers[2].id,
    type: 'Running',
    duration_minutes: 30,
    calories_burned: 320,
    date: '2024-06-05',
  },
];

const caloriesBurnedByMonth = [
  { month: 'Jan', calories: 3200 },
  { month: 'Feb', calories: 3000 },
  { month: 'Mar', calories: 3500 },
  { month: 'Apr', calories: 4000 },
  { month: 'May', calories: 3600 },
  { month: 'Jun', calories: 4100 },
  { month: 'Jul', calories: 4300 },
  { month: 'Aug', calories: 4500 },
  { month: 'Sep', calories: 3200 },
  { month: 'Oct', calories: 3000 },
  { month: 'Nov', calories: 2800 },
  { month: 'Dec', calories: 5000 },
];

const invoices = [
  {
    id: 'inv-001',
    customer_id: 'cust-001',
    amount: 120,
    status: 'paid',
    date: '2024-06-01',
  },
  {
    id: 'inv-002',
    customer_id: 'cust-002',
    amount: 150,
    status: 'pending',
    date: '2024-06-15',
  },
];

const customers = [
  {
    id: 'cust-001',
    name: 'Alex Johnson',
    email: 'alex@fitness.com',
  },
  {
    id: 'cust-002',
    name: 'Sarah Lee',
    email: 'sarah@fitness.com',
  },
];

const revenue = [
  { month: 'Jan', revenue: 5200 },
  { month: 'Feb', revenue: 4800 },
  { month: 'Mar', revenue: 5600 },
  { month: 'Apr', revenue: 5900 },
  { month: 'May', revenue: 6200 },
  { month: 'Jun', revenue: 6500 },
];

export {
  users,
  fitnessUsers,
  workouts,
  caloriesBurnedByMonth,
  invoices,
  customers,
  revenue,
};
