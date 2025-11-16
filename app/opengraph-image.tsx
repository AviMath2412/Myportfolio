import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Avi Mathur - AI/ML Developer & Full Stack Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1128",
          position: "relative",
        }}
      >
        {/* Background gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "400px",
            height: "400px",
            background: "rgba(0, 194, 255, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "20%",
            width: "400px",
            height: "400px",
            background: "rgba(110, 0, 255, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #00C2FF 0%, #6E00FF 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              padding: 0,
            }}
          >
            Avi Mathur
          </h1>
          <p
            style={{
              fontSize: 36,
              color: "#00C2FF",
              margin: "20px 0 0 0",
            }}
          >
            AI/ML Developer • Full Stack Innovator
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#F5F7FA",
              opacity: 0.8,
              margin: "20px 0 0 0",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            Specializing in vector search, intelligent automation, and high-impact solutions
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
