import React, { useState, PropsWithChildren, createContext } from "react";

type AppProps = {
    monthlyBudget: string;
    setMonthlyBudget: (amount: string) => void;
};

export const AppContext = createContext<AppProps>({
    monthlyBudget: "",
    setMonthlyBudget: () => {},
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [monthlyBudget, setMonthlyBudget] = useState("");

    const value = { monthlyBudget, setMonthlyBudget };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
