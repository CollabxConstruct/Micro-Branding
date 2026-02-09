import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export const RevenueSlide: React.FC = () => {
  const frame = useCurrentFrame();

  // Brutalist bar chart animation
  const bar1Height = spring({
    frame: frame - 30,
    fps: 30,
    config: { damping: 100 },
  });

  const bar2Height = spring({
    frame: frame - 50,
    fps: 30,
    config: { damping: 100 },
  });

  const bar3Height = spring({
    frame: frame - 70,
    fps: 30,
    config: { damping: 100 },
  });

  const titleSlide = interpolate(frame, [0, 20], [100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1A1A1A", // DARK GRAY
        fontFamily: "Arial Black, sans-serif",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 100,
          right: 100,
          transform: `translateY(${titleSlide}px)`,
        }}
      >
        <h2
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          PATH TO
        </h2>
        <h1
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: "#FF5C8A",
            margin: 0,
            letterSpacing: "-8px",
            lineHeight: 0.9,
            textShadow: "6px 6px 0px #000000",
          }}
        >
          $1M ARR
        </h1>
      </div>

      {/* BRUTAL BAR CHART */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 200,
          right: 200,
          height: 500,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
        }}
      >
        {/* MONTH 1-2 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <div
            style={{
              height: 500 * bar1Height * 0.1, // $10K = 10% of max
              backgroundColor: "#FF5C8A",
              border: "6px solid #FFFFFF",
              marginBottom: 20,
            }}
          />
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FF5C8A",
              marginBottom: 10,
            }}
          >
            $10K
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#CCCCCC",
              fontFamily: "Arial, sans-serif",
            }}
          >
            MONTH 1-2
          </div>
        </div>

        {/* MONTH 3-4 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <div
            style={{
              height: 500 * bar2Height * 0.5, // $50K = 50% of max
              backgroundColor: "#FFFFFF",
              border: "6px solid #FF5C8A",
              marginBottom: 20,
            }}
          />
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: 10,
            }}
          >
            $50K
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#CCCCCC",
              fontFamily: "Arial, sans-serif",
            }}
          >
            MONTH 3-4
          </div>
        </div>

        {/* MONTH 5-6 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <div
            style={{
              height: 500 * bar3Height, // $150K = 100%
              backgroundColor: "#FF5C8A",
              border: "6px solid #000000",
              marginBottom: 20,
              boxShadow: "8px 8px 0px #FFFFFF",
            }}
          />
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FF5C8A",
              marginBottom: 10,
            }}
          >
            $150K
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#CCCCCC",
              fontFamily: "Arial, sans-serif",
            }}
          >
            MONTH 5-6
          </div>
        </div>
      </div>

      {/* GEOMETRIC ACCENT - TOP RIGHT */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 300,
          height: 300,
          backgroundColor: "#FF5C8A",
          transform: "rotate(45deg) translateX(150px) translateY(-150px)",
        }}
      />
    </AbsoluteFill>
  );
};
