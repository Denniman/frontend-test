import { useState, useContext, FormEvent, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import { formatAmount } from "../../../../helpers";
import { CustomSelect } from "../../../../components";
import { CurrencyInput } from "../../../../components";
import { Icon, IconType } from "../../../../assets/icons";
import { AppContext } from "../../../../Context/Context";

type Expenses = {
    id: string;
    budget: string;
    percent: number;
    category: string;
};

const options = [
    { label: "Savings", icon: "Savings" },
    { label: "Food and Drink", icon: "Food and Drink" },
];

export const SelectCategory = () => {
    const navigate = useNavigate();

    const { monthlyBudget, setBudgetItems } = useContext(AppContext);
    const [budgetAmount, setBudgetAmount] = useState("");

    const [addedItems, setAddeditems] = useState<Expenses[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const totalExpenses = addedItems.reduce(
        (accu, curr) => accu + Number(curr.budget),
        0
    );

    const percentageRemaining =
        100 - Math.round((totalExpenses / Number(monthlyBudget)) * 100);

    const currentBalance = Number(monthlyBudget) - totalExpenses;

    const removeAddeditem = (id: string) => {
        const filteredList = addedItems.filter((item) => item.id !== id);
        setAddeditems(filteredList);
    };

    const percentageCalculator = Math.round(
        (Number(budgetAmount) / Number(monthlyBudget)) * 100
    );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (
            Number(budgetAmount) > currentBalance ||
            !budgetAmount.trim() ||
            !selectedCategory
        )
            return;
        const id = Date.now().toString();

        const budget = {
            id,
            budget: budgetAmount,
            category: selectedCategory,
            percent: percentageCalculator,
        };
        setAddeditems([...addedItems, budget]);

        setBudgetItems([...addedItems, budget]);
        setBudgetAmount("");
        setSelectedCategory("");
    };

    return (
        <Flex px={5} py={3} background="#fcfcfc" flexDirection="column">
            <Box
                mt={10}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeftLong />
                </button>
                <Text>2/3</Text>
            </Box>

            <Box w="100%" mt={5}>
                <Heading as="h1" size="lg" color={"#001233"}>
                    Create new budget
                </Heading>
                <Text>
                    How much would you like to spend on each category this
                    month?
                </Text>

                <form onSubmit={handleSubmit} className="mt-7">
                    <CustomSelect
                        options={options}
                        selecteItem={selectedCategory}
                        setSelecteItem={setSelectedCategory}
                    />

                    <CurrencyInput
                        className="mt-5"
                        value={budgetAmount}
                        onChange={(value) => setBudgetAmount(value)}
                    />

                    <Box
                        mt={5}
                        display="flex"
                        pos="relative"
                        alignItems="center"
                    >
                        {Boolean(percentageCalculator) && (
                            <Text color="#0466C8" fontSize={"14px"}>
                                % of total budget: {percentageCalculator}%
                            </Text>
                        )}
                        <Box pos="absolute" right={0} top={1}>
                            <button>
                                <Icon name="Add" />
                            </button>
                        </Box>
                    </Box>
                </form>
            </Box>

            <div className="grid grid-cols-[max-content_1fr_1fr_1fr] w-full gap-5 mt-20 items-center">
                {addedItems.map(({ id, budget, category, percent }) => (
                    <Fragment key={id}>
                        <div className="flex gap-3 items-center">
                            <Icon name={category as IconType} />
                            <Text fontSize={"14px"} as={"b"}>
                                {category}
                            </Text>
                        </div>
                        <div>
                            <Text fontSize={"14px"} as={"b"}>
                                ₦{formatAmount(Number(budget))}
                            </Text>
                        </div>
                        <div className="justify-self-end">
                            <Text fontSize={"14px"}>{percent}%</Text>
                        </div>

                        <div className="justify-self-end">
                            <button
                                className="h-[30px] w-[30px] bg-[#979DAC33] rounded-full text-center"
                                onClick={() => removeAddeditem(id)}
                            >
                                —
                            </button>
                        </div>
                    </Fragment>
                ))}
            </div>

            <Box
                pos="fixed"
                w="100%"
                zIndex={2}
                left={0}
                bottom={0}
                background={"white"}
            >
                <Box
                    py={7}
                    px={2}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                >
                    {addedItems.length > 0 && (
                        <Box flex={"1"}>
                            <Text fontSize={"14px"}>
                                % of budget remaining: {percentageRemaining}%
                            </Text>
                        </Box>
                    )}

                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <button
                            onClick={() => navigate("/")}
                            className="font-semibold text-[#0466C8]"
                        >
                            Done
                        </button>
                        <FaArrowRightLong color="#0466C8" />
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};
