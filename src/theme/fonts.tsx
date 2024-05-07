import { Global } from "@emotion/react";

export const Fonts = () => (
    <Global
        styles={`
            @font-face {
              font-weight: 400;
              font-family: "CircularStd-Medium";
              src: url("/fonts/CircularStd-Medium.otf") format("opentype");
            }

            @font-face {
                font-weight: 500;
                font-family: "CircularStd-Bold";
                src: url("/fonts/CircularStd-Bold.otf") format("opentype");
            }
        `}
    />
);
