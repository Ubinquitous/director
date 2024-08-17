import React, { SVGProps } from "react";

const GoBackIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_8094_435"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_8094_435)">
        <path
          d="M9.55 12L16.9 19.35C17.15 19.6 17.2708 19.8917 17.2625 20.225C17.2542 20.5583 17.125 20.85 16.875 21.1C16.625 21.35 16.3333 21.475 16 21.475C15.6667 21.475 15.375 21.35 15.125 21.1L7.425 13.425C7.225 13.225 7.075 13 6.975 12.75C6.875 12.5 6.825 12.25 6.825 12C6.825 11.75 6.875 11.5 6.975 11.25C7.075 11 7.225 10.775 7.425 10.575L15.125 2.875C15.375 2.625 15.6708 2.50417 16.0125 2.5125C16.3542 2.52084 16.65 2.65 16.9 2.9C17.15 3.15 17.275 3.44167 17.275 3.775C17.275 4.10834 17.15 4.4 16.9 4.65L9.55 12Z"
          fill="#8B8B9F"
        />
      </g>
    </svg>
  );
};

export default GoBackIcon;
