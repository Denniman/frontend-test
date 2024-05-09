/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import InputCurrency from "react-currency-input-field";

type CurrencyInputProps = {
    value: string;
    className?: string;
    placeholder?: string;
    onChange: (...event: any[]) => void;
};

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
    value,
    className,
    placeholder = "Amount (in ₦)",
    onChange,
}) => {
    const [innerValue, setInnerValue] = useState<typeof value>("");
    useEffect(() => {
        setInnerValue(value);
    }, [value]);
    return (
        <InputCurrency
            prefix="₦"
            value={innerValue}
            decimalsLimit={2}
            id="currency-input"
            placeholder={placeholder}
            className={`w-full border-b p-2 border-[#A8AFBF] focus:outline-none ${className}`}
            onValueChange={onChange}
        />
    );
};
