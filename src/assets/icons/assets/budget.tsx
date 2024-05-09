const Budget = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <path
                fill="#0466C8"
                d="M0 6h4.286v14H0V6Zm8-6h4v20H8V0Zm8 11.429h4V20h-4v-8.571Z"
            />
        </svg>
    );
};

export default Budget;
