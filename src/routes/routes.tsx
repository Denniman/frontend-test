import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Budget, CreateBudget, SelectCategory } from "../pages";

export const RootRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Budget />} />
                <Route path="/create-budget" element={<CreateBudget />} />
                <Route path="/select-category" element={<SelectCategory />} />
            </Routes>
        </BrowserRouter>
    );
};
