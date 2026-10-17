'use client';
import { useContext } from "react";
import { MyPlanContext } from "@/app/context/myPlanContext";
const SaveTodaysPlanBtn = () => {
    const { plans, setPlans } = useContext(MyPlanContext);

    const handleAddToPlans = () => {
        console.log("Adding to today's plans...");
        };

        
    return (
        
              <button onClick={() => handleAddToPlans()}
                type="button"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c2f800] hover:bg-[#b3e600] active:scale-[0.98] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="12" y1="14" x2="12" y2="18" />
                  <line x1="10" y1="16" x2="14" y2="16" />
                </svg>
                <span>Add to today&apos;s plan</span>
              </button>
    );
};

export default SaveTodaysPlanBtn;