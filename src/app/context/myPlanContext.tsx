"use client";
import React, { Children, createContext } from "react";


const MyPlanContext = createContext({});

const MyPlanContextProvider = ({Children} : {Children: React.ReactNode}) => {

    const [plans, setPlans] = React.useState([]);
    const [laterPlans, setLaterPlans] = React.useState([]);

    const myPlan = {
        plans,
        setPlans,
        laterPlans,
        setLaterPlans

    };


    return (
        <MyPlanContext.Provider value={{ myPlan }}>
            {Children}

        </MyPlanContext.Provider>
    );
};

export { MyPlanContext, MyPlanContextProvider };