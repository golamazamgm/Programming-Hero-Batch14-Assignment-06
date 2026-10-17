"use client";
import React, { createContext, useState } from "react";
import { Workout } from "../type";

interface MyPlanContextType {
    plans: Workout[];
    setPlans: React.Dispatch<React.SetStateAction<Workout[]>>;
    laterPlans: Workout[];
    setLaterPlans: React.Dispatch<React.SetStateAction<Workout[]>>;
}

const MyPlanContext = createContext<MyPlanContextType | null>(null);

const MyPlanContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plans, setPlans] = useState<Workout[]>([]);
    const [laterPlans, setLaterPlans] = useState<Workout[]>([]);

    const value: MyPlanContextType = {
        plans,
        setPlans,
        laterPlans,
        setLaterPlans,
    };

    return (
        <MyPlanContext.Provider value={value}>
            {children}
        </MyPlanContext.Provider>
    );
};

export { MyPlanContext, MyPlanContextProvider };