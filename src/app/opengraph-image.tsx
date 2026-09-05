import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFF9F4",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 96,
            width: 28,
            height: 28,
            background: "#B84D68",
            transform: "rotate(45deg)",
            borderRadius: 6,
          }}
        />
        <div
          style={{
            fontSize: 26,
            color: "#B84D68",
            fontFamily: "monospace",
            letterSpacing: 2,
            marginBottom: 24,
          }}
        >
          {profile.role.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 88,
            color: "#28242B",
            fontWeight: 600,
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          Hi, I&apos;m {profile.name}.
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#565058",
            marginTop: 28,
            maxWidth: 900,
            display: "flex",
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
