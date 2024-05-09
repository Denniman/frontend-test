import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import { AppContext } from "../../../../Context/Context";
import { CurrencyInput } from "../../../../components";

export const CreateBudget = () => {
    const navigate = useNavigate();
    const [budgetState, setBudgetState] = useState("");
    const { setMonthlyBudget } = useContext(AppContext);

    const handleNavigatge = () => {
        navigate("/select-category");
        setMonthlyBudget(budgetState);
    };

    return (
        <Flex px={5} py={3} background={"#fcfcfc"} flexDirection="column">
            <Box
                mt={10}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeftLong />
                </button>
                <Text>1/3</Text>
            </Box>

            <Box w="100%" mt={5}>
                <Heading as="h1" size="lg" color={"#001233"}>
                    Create new budget
                </Heading>
                <Text>How much would you like to budget for this month?</Text>

                <CurrencyInput
                    className="mt-5"
                    value={budgetState}
                    onChange={(value) => setBudgetState(value)}
                />
            </Box>

            <Box
                pos="fixed"
                w="100%"
                zIndex={2}
                left={0}
                bottom={0}
                background={"white"}
            >
                <Box
                    px={3}
                    py={7}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text
                        borderBottom={"1px solid #67A2DC"}
                        fontSize={"14px"}
                        color={"#67A2DC"}
                    >
                        Create from spending pattern
                    </Text>
                    <button
                        onClick={handleNavigatge}
                        style={{ color: "#0466C8", fontWeight: "bold" }}
                    >
                        Next
                    </button>
                </Box>
            </Box>
        </Flex>
    );
};
