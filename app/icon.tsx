import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#FF914D",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        border: "2px solid black",
        fontWeight: 900,
        boxShadow: "2px 2px 0px black",
      }}
    >
      H
    </div>,
    {
      ...size,
    },
  );
}
