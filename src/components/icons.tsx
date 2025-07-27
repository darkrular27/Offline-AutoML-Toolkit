import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l4 4-4 4-4-4 4-4z" />
      <path d="M2 12l4 4-4 4-4-4 4-4z" />
      <path d="M12 22l4-4-4-4-4 4 4 4z" />
      <path d="M22 12l-4 4-4-4 4-4-4 4z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}
