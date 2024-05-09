import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Icon, IconType } from "../../assets/icons";
import { formatAmount } from "../../helpers";
import { AppContext } from "../../Context/Context";

export const Budget = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { monthlyBudget, budgetItems } = useContext(AppContext);

    return (
        <Flex px={5} py={3} background={"#fcfcfc"} flexDirection="column">
            <Box w="100%" mt="7">
                <Heading as="h1" size="lg" color={"#001233"}>
                    Budget
                </Heading>
                <Box display="flex" alignItems="center" gap={3}>
                    <Box mt={4}>
                        <Icon name="Naira" />
                    </Box>

                    <Text mt={3} fontSize="md" color={"#707480"}>
                        Monthly Budget
                    </Text>
                </Box>
                <Box
                    mt={5}
                    p={2}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    backgroundColor={"#fff"}
                    w="100%"
                    boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
                    rounded="md"
                >
                    {monthlyBudget ? (
                        <Text color={"#001233"} as="b" fontSize={"28px"}>
                            ₦{formatAmount(Number(monthlyBudget))}
                        </Text>
                    ) : (
                        <>
                            <Text as="b" fontSize="16px" color={"#001233"}>
                                Create a budget
                            </Text>
                            <button onClick={() => navigate("/create-budget")}>
                                <Icon name="Add" />
                            </button>
                        </>
                    )}
                </Box>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={5}
            >
                <Box display="flex" gap={4}>
                    <Text>Last Month</Text>
                    <Text color="#0466C8">This Month</Text>
                </Box>
                <Box pos="relative">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <HiOutlineDotsHorizontal />
                    </button>

                    {isOpen && (
                        <Box
                            boxShadow={"0px -5px 20px 5px rgba(0, 0, 0, 0.04)"}
                            pos="absolute"
                            top="8"
                            zIndex={"100"}
                            bgColor={"white"}
                            px={2}
                            textAlign={"center"}
                            py={3}
                            right="0"
                            w="200px"
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"4"}
                            >
                                <Icon name="Naira" />
                                <Text
                                    color="#000000"
                                    fontSize={"12px"}
                                    mb={"10px"}
                                >
                                    Expenses overview
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"4"}
                            >
                                <Icon name="Naira" />
                                <Text color="#000000" fontSize={"12px"}>
                                    Category Overview
                                </Text>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

            <Box
                mt={7}
                gap={5}
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
                <Icon name="EmptyBudget" />
                <Text color="#707480" maxW="250px" textAlign={"center"}>
                    You haven’t created a budget for this month yet
                </Text>
            </Box>

            {monthlyBudget && (
                <Box mt={10}>
                    <Heading as="h5" fontSize={"21px"} color="#001233">
                        Category Breakdown
                    </Heading>

                    <Flex
                        mt={5}
                        flexDirection={"column"}
                        justifyContent="space-between"
                    >
                        {budgetItems.map(
                            ({ id, budget, category, percent }) => (
                                <Flex
                                    key={id}
                                    gap="5"
                                    justifyContent="space-between"
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <Icon name={category as IconType} />
                                        <Flex flexDirection="column">
                                            <Text
                                                color="#001233"
                                                fontSize={"14px"}
                                                as={"b"}
                                            >
                                                {category}
                                            </Text>
                                            <Text
                                                fontSize={"14px"}
                                                color="#707480"
                                            >
                                                {percent}%
                                            </Text>
                                        </Flex>
                                    </div>

                                    <Text fontSize={"14px"} as={"b"}>
                                        ₦{formatAmount(Number(budget))}
                                    </Text>
                                </Flex>
                            )
                        )}
                    </Flex>
                </Box>
            )}

            <Box
                pos="fixed"
                w="100%"
                zIndex={2}
                left={0}
                bottom={0}
                boxShadow={"0px -5px 20px 5px rgba(0, 0, 0, 0.04)"}
                background={"white"}
            >
                <Box
                    px={3}
                    py={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box
                        gap={2}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Icon name="home" />
                        <Text fontSize="12px">Home</Text>
                    </Box>

                    <Box
                        gap={2}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Icon name="reports" />
                        <Text fontSize="12px">Reports</Text>
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Icon name="chat" />
                        <Text fontSize="12px">Chat</Text>
                    </Box>
                    <Box
                        gap={2}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Icon name="budget" />
                        <Text fontSize="12px">Budget</Text>
                    </Box>
                    <Box
                        gap={2}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Icon name="profile" />
                        <Text fontSize="12px">Profile</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};
