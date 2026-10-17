'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MyPlanContext } from '@/app/context/myPlanContext';
import { Workout } from '@/app/type';
import { toast } from "react-toastify";

const MyPlans = () => {
    const context = useContext(MyPlanContext);

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');
    const [completedIds, setCompletedIds] = useState<Record<string | number, boolean>>({});

    const plans : Workout[] = context?.plans || [];
    const laterPlans : Workout[] = context?.laterPlans || [];
    const setPlans = context?.setPlans;
    const setLaterPlans = context?.setLaterPlans;

    // Active list based on selected tab
    const rawList = activeTab === 'today' ? plans : laterPlans;

    // Sort items
    const activeList = [...rawList].sort((a, b) => {
        if (sortBy === 'duration') return (a.duration || 0) - (b.duration || 0);
        if (sortBy === 'calories') return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    // Calculate aggregate stats
    const totalExercises = activeList.length;
    const totalMinutes = activeList.reduce((acc, curr) => acc + (curr.duration || 0), 0);
    const totalCalories = activeList.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

    // Handlers
    const handleRemove = (id: string | number) => {
        if (activeTab === 'today' && setPlans) {
            setPlans((prev) => prev.filter((item) => String(item.id) !== String(id)));
            toast.info("Workout removed from today's plan.");
        } else if (activeTab === 'saved' && setLaterPlans) {
            setLaterPlans((prev) => prev.filter((item) => String(item.id) !== String(id)));
            toast.info("Workout removed from saved plans.");
        }
    };

    const toggleComplete = (id: string | number) => {
        setCompletedIds((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <main className="min-h-screen bg-[#0f1013] text-neutral-200 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* Header Section */}
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                        MY PLAN
                    </h1>
                    <p className="mt-1 text-xs text-neutral-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Card */}
                <div className="grid grid-cols-3 rounded-2xl bg-[#161820] border border-white/5 p-6 sm:p-7">
                    {/* Exercises */}
                    <div>
                        <span className="text-xs font-medium text-neutral-400">Exercises</span>
                        <div className="text-3xl sm:text-4xl font-black text-[#c2f800] mt-1">
                            {totalExercises}
                        </div>
                    </div>

                    {/* Minutes */}
                    <div>
                        <span className="text-xs font-medium text-neutral-400">Minutes</span>
                        <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                            {totalMinutes}
                        </div>
                    </div>

                    {/* Calories */}
                    <div>
                        <span className="text-xs font-medium text-neutral-400">Calories</span>
                        <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                            {totalCalories}
                        </div>
                    </div>
                </div>

                {/* Tabs & Sort Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    {/* Pill Tabs */}
                    <div className="inline-flex self-start p-1 rounded-xl bg-[#161820] border border-white/5">
                        <button
                            type="button"
                            onClick={() => setActiveTab('today')}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeTab === 'today'
                                    ? 'bg-[#232732] text-white shadow-sm'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeTab === 'saved'
                                    ? 'bg-[#232732] text-white shadow-sm'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-neutral-400">
                        <span>Sort By</span>
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                                aria-label="Sort workouts by"
                                className="appearance-none bg-[#161820] border border-white/10 hover:border-white/20 text-white text-xs font-medium rounded-xl py-2 pl-3 pr-8 focus:outline-none cursor-pointer"
                            >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>
                            <svg
                                className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                {activeList.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center text-center py-24 px-4 rounded-2xl bg-[#161820]/40 border border-white/5">
                        <h2 className="text-base font-black uppercase tracking-wider text-white">
                            NOTHING HERE YET
                        </h2>
                        <p className="mt-1 text-xs text-neutral-400 max-w-sm">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 px-6 py-2.5 rounded-full bg-[#c2f800] hover:bg-[#b3e600] active:scale-[0.98] text-black font-bold text-xs uppercase tracking-wider transition-all"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    /* Workout Card List */
                    <div className="space-y-3.5">
                        {activeList.map((workout) => {
                            const isCompleted = completedIds[workout.id];

                            return (
                                <div
                                    key={workout.id}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#161820] border border-white/5 transition-all hover:border-white/10"
                                >
                                    {/* Left: Thumbnail & Details */}
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="relative w-28 h-20 sm:w-32 sm:h-20 shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                                            <Image
                                                src={workout.image}
                                                alt={workout.name}
                                                fill
                                                sizes="130px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white truncate">
                                                {workout.name}
                                            </h3>
                                            <p className="text-xs text-neutral-400 mt-0.5 truncate">
                                                {workout.equipment}
                                            </p>

                                            {/* Meta stats */}
                                            <div className="flex items-center gap-3 mt-2 text-[11px] font-medium text-neutral-400">
                                                {/* Duration */}
                                                <div className="flex items-center gap-1">
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
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="w-3.5 h-3.5 text-neutral-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2c-.5 2.5-3 4.5-3 7.5a6 6 0 0 0 12 0c0-3-2.5-5-3-7.5-.5 2-1.5 3-3 3s-2.5-1-3-3z" />
                                                    </svg>
                                                    <span>{workout.caloriesBurned} kcal</span>
                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center gap-1">
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

                                    {/* Right: Actions */}
                                    <div className="flex items-center self-end sm:self-center gap-2.5 shrink-0">
                                        <Link
                                            href={`/${workout.id}`}
                                            className="px-4 py-2 rounded-full border border-white/10 hover:border-white/25 text-neutral-200 hover:text-white text-xs font-semibold transition-all"
                                        >
                                            View Details
                                        </Link>

                                        {/* Mark as Done (Today's Plan only) */}
                                        {activeTab === 'today' && (
                                            <button
                                                type="button"
                                                onClick={() => toggleComplete(workout.id)}
                                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs transition-all active:scale-[0.98] cursor-pointer ${isCompleted
                                                        ? 'bg-neutral-800 text-neutral-400 border border-white/10'
                                                        : 'bg-[#c2f800] hover:bg-[#b3e600] text-black'
                                                    }`}
                                            >
                                                <svg
                                                    className="w-3.5 h-3.5 stroke-[2.5]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>{isCompleted ? 'Done' : 'Mark as Done'}</span>
                                            </button>
                                        )}

                                        {/* Remove Action */}
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(workout.id)}
                                            className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                                            title="Remove"
                                            aria-label="Remove workout"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
};

export default MyPlans;