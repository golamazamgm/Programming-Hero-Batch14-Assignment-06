import React from 'react';
import Image from 'next/image';
import { Workout } from '../type';
import Link from 'next/link';

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/${workout.id}`} >
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-[#16171b] border border-white/5 transition-all duration-300 hover:border-white/15 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-neutral-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        {/* Muscle Group Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {workout.muscleGroups?.map((muscle, idx) => (
            <span
              key={idx}
              className="px-3 py-0.5 text-[11px] font-black uppercase tracking-wider rounded-full bg-[#c2f800] text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title & Equipment */}
        <div>
          <h3 className="text-base font-extrabold text-white uppercase tracking-wide">
            {workout.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            {workout.equipment}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-4" />

        {/* Stats Row */}
        <div className="flex items-center gap-6 text-xs font-medium text-neutral-400">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>

            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <polygon
                strokeLinecap="round"
                strokeLinejoin="round"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;