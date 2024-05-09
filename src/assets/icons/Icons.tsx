import { IconProps } from "./Icon.interface";

import Add from "./assets/add";
import Food from "./assets/food";
import Chat from "./assets/chat";
import Home from "./assets/home";
import Naira from "./assets/naira";
import Budget from "./assets/budget";
import Profile from "./assets/profile";
import Savings from "./assets/savings";
import Reports from "./assets/reports";
import EmptyBudget from "./assets/empty-budget";

const iconMap = {
    Add: Add,
    home: Home,
    chat: Chat,
    Naira: Naira,
    budget: Budget,
    profile: Profile,
    Savings: Savings,
    reports: Reports,
    "Food and Drink": Food,
    EmptyBudget: EmptyBudget,
};

export type IconType = keyof typeof iconMap;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolver: Record<string, any> = {};

export const iconNameList = Object.keys(iconMap) as IconType[];

export const Icon = ({
    name,
    size,
    ...props
}: IconProps & { name: IconType }) => {
    const style = size
        ? {
              height: size,
              width: size,
              viewBox: `0 0 ${size * 1.2} ${size * 1.2}`,
          }
        : {};

    for (const [key, icon] of Object.entries(iconMap)) {
        // const icon = value as React.FunctionComponent<SvgProps & { name: IconType }>;
        resolver[key] = icon({ size, ...props, ...style });
    }

    return resolver[name];
};
