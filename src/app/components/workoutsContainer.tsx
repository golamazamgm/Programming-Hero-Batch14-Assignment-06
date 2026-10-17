import React from 'react';
import { Workout } from '../type';
import WorkoutCard from './workoutCard';

const getWorkouts = async (): Promise<Workout[]> => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch workouts: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error loading workouts:', error);
    return [];
  }
};

const WorkoutsContainer = async () => {
  const workouts = await getWorkouts();

  if (workouts.length === 0) {
    return (
      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-8 text-center text-rose-300 my-6">
        <h3 className="text-lg font-bold">Failed to load workouts</h3>
        <p className="text-xs text-neutral-400 mt-1">Please check your connection and try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-auto">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutsContainer;