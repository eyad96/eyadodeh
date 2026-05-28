import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation using the signature geometric 'EO' logo
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b", // Premium dark theme matching background
          borderRadius: "6px",
          padding: "3px",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract geometric 'E' in Indigo */}
          <path
            d="M6 8h10M6 16h7M6 24h10M6 8v16"
            stroke="#6366f1"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Abstract geometric 'O' in Cyan */}
          <circle
            cx="21"
            cy="16"
            r="6.5"
            stroke="#06b6d4"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
