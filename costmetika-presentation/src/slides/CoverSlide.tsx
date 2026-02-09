import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export const CoverSlide: React.FC = () => {
  const frame = useCurrentFrame();

  // Brutalist animations - harsh, geometric
  const titleOpacity = spring({
    frame,
    fps: 30,
    config: {
      damping: 200,
    },
  });

  const pinkBlockSlide = interpolate(frame, [0, 30], [-1920, 0], {
    extrapolateRight: "clamp",
  });

  const taglineSlide = interpolate(frame, [40, 70], [100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000", // STARK BLACK
        fontFamily: "Arial Black, sans-serif",
      }}
    >
      {/* PINK GEOMETRIC BLOCK - Slides in from left */}
      <div
        style={{
          position: "absolute",
          left: pinkBlockSlide,
          top: 0,
          width: 600,
          height: "100%",
          backgroundColor: "#FF5C8A", // BRUTAL PINK
          transform: "skewX(-10deg)",
          transformOrigin: "top left",
        }}
      />

      {/* MAIN TITLE - CENTER */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <h1
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "-8px",
            textTransform: "uppercase",
            lineHeight: 0.9,
            textShadow: "8px 8px 0px #FF5C8A",
          }}
        >
          COSTMETIKA
        </h1>
      </div>

      {/* TAGLINE - BOTTOM */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          left: 0,
          right: 0,
          textAlign: "center",
          transform: `translateY(${taglineSlide}px)`,
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#FFFFFF",
            padding: "30px 80px",
            border: "8px solid #FF5C8A",
          }}
        >
          <p
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#000000",
              margin: 0,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            LUXURY BEAUTY, REDEFINED
          </p>
        </div>
      </div>

      {/* GEOMETRIC ELEMENTS - Bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 400,
          height: 400,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 0,
            right: 0,
            border: "12px solid #FF5C8A",
          }}
        />
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#FF5C8A",
            position: "absolute",
            bottom: 220,
            right: 220,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
