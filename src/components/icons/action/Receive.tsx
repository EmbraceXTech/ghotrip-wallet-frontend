import { IconActiveType } from "@/types/icon.type";

export default function ReceiveIcon({
  active = false,
  activeColor = "#B497EE",
  idleColor = "#0F1419",
}: IconActiveType) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={active ? activeColor : idleColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11.5098L12 14.5098L15 11.5098"
        stroke={active ? activeColor : idleColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14.5098V6.50977"
        stroke={active ? activeColor : idleColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098"
        stroke={active ? activeColor : idleColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}