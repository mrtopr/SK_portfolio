import { ImageResponse } from "next/og";
import { getProfile } from "@/lib/content";

export const alt = "Sachin Kumar | Full-Stack & Real-Time Systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const profile = getProfile();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1719",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "sans-serif",
          color: "#E6EEEB",
          border: "2px solid #26363B",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#FF6B9C", fontSize: "16px", letterSpacing: "2px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF6B9C" }} />
            <span>IIIT BHUBANESWAR // B.TECH CE &apos;28</span>
          </div>
          <div style={{ color: "#8B9E9A", fontSize: "14px", fontFamily: "monospace" }}>
            LAT 20.2961° N, LON 85.8245° E
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", fontWeight: "bold", color: "#E6EEEB", letterSpacing: "-1px" }}>
            {profile.person.name}
          </div>
          <div style={{ fontSize: "24px", color: "#8B9E9A", maxWidth: "880px", lineHeight: "1.4" }}>
            {profile.person.summary}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #26363B", paddingTop: "24px", color: "#8B9E9A", fontSize: "16px", fontFamily: "monospace" }}>
          <div>SENTINELLINK • EDUARCHIVE • DISTRIBUTED SYSTEMS</div>
          <div style={{ color: "#FF6B9C" }}>heysachin.me</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
