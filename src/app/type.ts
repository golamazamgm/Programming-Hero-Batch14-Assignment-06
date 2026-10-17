export interface Workout {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string | number;
  rating: number;
  description: string;
  instructions: string[];

  // Optional convenience / legacy fields
  category?: string;
  muscle_group?: string;
  target_muscle?: string;
}