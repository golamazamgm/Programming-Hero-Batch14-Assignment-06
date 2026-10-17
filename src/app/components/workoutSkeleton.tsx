import React from 'react';

const WorkoutSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl bg-[#121316] border border-white/5 p-5 flex flex-col gap-4 animate-pulse"
        >
          <div className="w-full h-48 rounded-xl bg-white/5" />
          <div className="h-4 w-1/3 rounded bg-white/10" />
          <div className="h-6 w-3/4 rounded bg-white/10" />
          <div className="h-3 w-full rounded bg-white/5" />
          <div className="h-3 w-2/3 rounded bg-white/5" />
          <div className="h-14 w-full rounded-xl bg-white/5 mt-2" />
          <div className="h-10 w-full rounded-xl bg-white/10 mt-1" />
        </div>
      ))}
    </div>
  );
};

export default WorkoutSkeleton;
