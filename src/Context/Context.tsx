import React, { useState, PropsWithChildren, createContext } from "react";

type BudgetItemsInterface = {
    id: string;
    budget: string;
    percent: number;
    category: string;
};

type AppProps = {
    monthlyBudget: string;
    budgetItems: BudgetItemsInterface[];
    setMonthlyBudget: (items: string) => void;
    setBudgetItems: (item: BudgetItemsInterface[]) => void;
};

export const AppContext = createContext<AppProps>({
    monthlyBudget: "",
    budgetItems: [],
    setMonthlyBudget: () => {},
    setBudgetItems: () => {},
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [monthlyBudget, setMonthlyBudget] = useState("");
    const [budgetItems, setBudgetItems] = useState<BudgetItemsInterface[]>([]);

    const value = {
        budgetItems,
        monthlyBudget,
        setMonthlyBudget,
        setBudgetItems,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
