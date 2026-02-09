import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, spring } from "remotion";

interface Props {
  brandName: string;
  tagline: string;
}

export const FinalVideo: React.FC<Props> = ({ brandName, tagline }) => {
  return (
    <AbsoluteFill>
      {/* SCENE 1: BRUTAL INTRO (0-120 frames / 0-4s) */}
      <Sequence from={0} durationInFrames={120}>
        <Scene1 brandName={brandName} />
      </Sequence>

      {/* SCENE 2: BRAND PILLARS FLASH (120-420 frames / 4-14s) */}
      <Sequence from={120} durationInFrames={300}>
        <Scene2 />
      </Sequence>

      {/* SCENE 3: VISUAL IDENTITY (420-600 frames / 14-20s) */}
      <Sequence from={420} durationInFrames={180}>
        <Scene3 />
      </Sequence>

      {/* SCENE 4: REVENUE EXPLOSION (600-750 frames / 20-25s) */}
      <Sequence from={600} durationInFrames={150}>
        <Scene4 />
      </Sequence>

      {/* SCENE 5: FINAL CTA (750-900 frames / 25-30s) */}
      <Sequence from={750} durationInFrames={150}>
        <Scene5 tagline={tagline} />
      </Sequence>
    </AbsoluteFill>
  );
};

// SCENE 1: BRUTAL INTRO
const Scene1: React.FC<{ brandName: string }> = ({ brandName }) => {
  const frame = useCurrentFrame();

  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 100 },
  });

  const rotate = interpolate(frame, [0, 120], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ROTATING PINK SQUARE */}
      <div
        style={{
          width: 400 * scale,
          height: 400 * scale,
          backgroundColor: "#FF5C8A",
          transform: `rotate(${rotate}deg)`,
          position: "absolute",
        }}
      />

      {/* BRAND NAME */}
      <h1
        style={{
          fontSize: 140 * scale,
          fontWeight: 900,
          color: "#FFFFFF",
          margin: 0,
          letterSpacing: "-6px",
          fontFamily: "Arial Black, sans-serif",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 10,
          textShadow: "8px 8px 0px #FF5C8A",
        }}
      >
        {brandName}
      </h1>
    </AbsoluteFill>
  );
};

// SCENE 2: BRAND PILLARS FLASH
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const pillars = [
    "EDUCATION FIRST",
    "INCLUSIVE BEAUTY",
    "TRANSPARENT LUXURY",
    "COMMUNITY & CONNECTION",
    "EFFORTLESS ELEGANCE",
  ];

  // Show each pillar for 60 frames
  const currentPillar = Math.floor(frame / 60) % pillars.length;

  const flashOpacity = interpolate(frame % 60, [0, 10, 50, 60], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* BLACK BOX WITH PILLAR */}
      <div
        style={{
          backgroundColor: "#000000",
          border: "16px solid #FF5C8A",
          padding: "80px 120px",
          opacity: flashOpacity,
        }}
      >
        <h2
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#FF5C8A",
            margin: 0,
            letterSpacing: "4px",
            fontFamily: "Arial Black, sans-serif",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {pillars[currentPillar]}
        </h2>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 3: VISUAL IDENTITY
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const pinkExpand = spring({
    frame,
    fps: 30,
    config: { damping: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1A1A1A",
      }}
    >
      {/* SPLIT SCREEN */}
      <div style={{ display: "flex", height: "100%" }}>
        {/* LEFT: PINK */}
        <div
          style={{
            flex: pinkExpand,
            backgroundColor: "#FF5C8A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 200,
              fontWeight: 900,
              color: "#000000",
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            #FF5C8A
          </div>
        </div>

        {/* RIGHT: BLACK */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              marginBottom: 40,
            }}
          >
            BRUTAL
          </div>
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "#FF5C8A",
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            BEAUTY
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 4: REVENUE EXPLOSION
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const numberScale = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 50 },
  });

  const countUp = Math.floor(1000000 * numberScale);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FF5C8A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 240,
            fontWeight: 900,
            color: "#000000",
            fontFamily: "Arial Black, sans-serif",
            lineHeight: 0.9,
            textShadow: "12px 12px 0px #FFFFFF",
          }}
        >
          ${(countUp / 1000).toFixed(0)}K
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#FFFFFF",
            fontFamily: "Arial Black, sans-serif",
            marginTop: 40,
            letterSpacing: "8px",
          }}
        >
          ARR YEAR 1
        </div>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 5: FINAL CTA
const Scene5: React.FC<{ tagline: string }> = ({ tagline }) => {
  const frame = useCurrentFrame();

  const fadeIn = spring({
    frame,
    fps: 30,
    config: { damping: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: fadeIn,
      }}
    >
      {/* LOGO */}
      <h1
        style={{
          fontSize: 180,
          fontWeight: 900,
          color: "#FFFFFF",
          margin: 0,
          letterSpacing: "-8px",
          fontFamily: "Arial Black, sans-serif",
          textTransform: "uppercase",
          textShadow: "10px 10px 0px #FF5C8A",
        }}
      >
        COSTMETIKA
      </h1>

      {/* TAGLINE */}
      <div
        style={{
          backgroundColor: "#FF5C8A",
          padding: "40px 100px",
          marginTop: 60,
          border: "8px solid #FFFFFF",
        }}
      >
        <p
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#000000",
            margin: 0,
            letterSpacing: "6px",
            fontFamily: "Arial Black, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {tagline}
        </p>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 80,
          fontSize: 48,
          fontWeight: 700,
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        JOIN THE REVOLUTION
      </div>
    </AbsoluteFill>
  );
};
