import { useState, useEffect, useRef } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { Icon, IconType } from "../../assets/icons";

type OptionsProps = {
    label: string;
    icon: string;
};

type CustomSelectProps = {
    placeholder?: string;
    selecteItem: string;
    options: OptionsProps[];
    setSelecteItem: (item: string) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    selecteItem,
    setSelecteItem,
    placeholder = "Select Expense Category",
}) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="w-3/4 md:w-1/2 relative text-sm" ref={dropdownRef}>
            <button
                className="p-3 bg-white flex items-center justify-between w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selecteItem ? (
                    <div className="flex items-center gap-3">
                        <Icon name={selecteItem as IconType} />
                        <p className="#001233">{selecteItem}</p>
                    </div>
                ) : (
                    <p className="text-[#A8AFBF]">{placeholder}</p>
                )}

                {isOpen ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {isOpen && (
                <ul className="max-h-60 shadow-white-500/50 mt-2 shadow-lg w-full bg-white overflow-y-scroll absolute z-40 divide-y divide-slate-200">
                    {options.map(({ label, icon }) => (
                        <li
                            onClick={() => {
                                setSelecteItem(label);
                                setIsOpen(false);
                            }}
                            key={label}
                            className="hover:bg-gray-300 flex text-sm items-center w-full gap-3 p-3 "
                        >
                            <span>
                                <Icon name={icon as IconType} />
                            </span>
                            <p>{label}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

CustomSelect.displayName = "CustomSelect";
