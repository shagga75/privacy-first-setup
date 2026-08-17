import { ImageResponse } from "next/og";

export const alt = "Privacy First Setup";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#242424",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f7931a",
            marginBottom: 28,
          }}
        >
          Dossier 001 · Privacy First Setup
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ede3cf",
            maxWidth: 920,
          }}
        >
          Configurá tu wallet Bitcoin con privacidad desde el día uno
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
          <div
            style={{
              display: "flex",
              width: 340,
              height: 26,
              background: "#0a0908",
              borderRadius: 3,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 180,
              height: 26,
              background: "#f7931a",
              borderRadius: 3,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#b9ac93",
            marginTop: 44,
          }}
        >
          Guía + Privacy Score · open source · sin backend · sin tracking
        </div>
      </div>
    ),
    { ...size },
  );
}
