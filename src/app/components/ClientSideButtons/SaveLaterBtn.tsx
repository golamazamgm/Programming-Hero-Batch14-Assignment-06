'use client';
import { useContext } from "react";
import { MyPlanContext } from "@/app/context/myPlanContext";
import { Workout } from "@/app/type";

interface SaveLaterBtnProps {
  workout: Workout;
}

const SaveLaterBtn = ({ workout }: SaveLaterBtnProps) => {
  const context = useContext(MyPlanContext);

  if (!context) {
    throw new Error("SaveLaterBtn must be used within a MyPlanContextProvider");
  }

  const { laterPlans, setLaterPlans } = context;

  const handleAddToLaterPlans = () => {
    const isAlreadySaved = laterPlans.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (isAlreadySaved) {
      console.log("Workout is already in save for later.");
      return;
    }

    setLaterPlans((prev) => [...prev, workout]);
    console.log("Workout added to later plans.");
  };

  return (
    <button
      onClick={handleAddToLaterPlans}
      type="button"
      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent border border-white/10 hover:border-white/25 active:scale-[0.98] text-neutral-200 hover:text-white font-medium text-xs tracking-wider transition-all cursor-pointer"
    >
      <svg
        className="w-4 h-4 text-neutral-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span>Save for later</span>
    </button>
  );
};

export default SaveLaterBtn;