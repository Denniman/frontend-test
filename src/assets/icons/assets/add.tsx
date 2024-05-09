const Add = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            {...props}
        >
            <circle cx={15} cy={15} r={15} fill="#CADDF1" />
            <path
                fill="#0466C8"
                d="M9 14.113h4.809V9h2.345v5.113H21v1.715h-4.846V21h-2.345v-5.172H9v-1.715Z"
            />
        </svg>
    );
};

export default Add;
