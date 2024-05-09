const Home = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={20}
            fill="none"
            {...props}
        >
            <path
                fill="#C1C4CD"
                d="m11.765 3.165 5.882 5.294v9.188h-2.353v-7.059H8.235v7.06H5.882v-9.19l5.883-5.293Zm0-3.165L0 10.588h3.53V20h7.058v-7.059h2.353V20H20v-9.412h3.53L11.764 0Z"
            />
        </svg>
    );
};

export default Home;
