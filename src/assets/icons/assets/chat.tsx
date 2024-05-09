const Chat = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 47 47"
            fill="none"
            {...props}
        >
            <g filter="url(#a)">
                <path
                    stroke="#797B8B"
                    strokeWidth="2"
                    d="M35 19.5C35 13.149 29.851 8 23.5 8S12 13.149 12 19.5 17.149 31 23.5 31 35 25.851 35 19.5Z"
                />
            </g>
            <path
                stroke="#797B8B"
                strokeWidth="0.804"
                d="M26.898 17.635h-2.371v6.043h-1.711v-6.043h-2.361V16h6.443v1.635Z"
            />
            <defs>
                <filter
                    id="a"
                    width="45.386"
                    height="45.386"
                    x="0.807"
                    y="0.684"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="3.877" />
                    <feGaussianBlur stdDeviation="4.846" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.2 0 0 0 0.13 0" />
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_26_82"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_26_82"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default Chat;
