const Reports = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={20}
            fill="none"
            {...props}
        >
            <path
                fill="#C1C4CD"
                d="M17.5 0h-15A2.507 2.507 0 0 0 0 2.5v15.012A2.497 2.497 0 0 0 2.5 20h20c1.375 0 2.5-1.125 2.5-2.5v-10L17.5 0Zm-15 17.512V2.5h13.75v6.25h6.25v8.762h-20Z"
            />
        </svg>
    );
};

export default Reports;
