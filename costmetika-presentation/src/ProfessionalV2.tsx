import { AbsoluteFill, useCurrentFrame, interpolate, spring, Easing, Sequence } from "remotion";

interface Props {
  brandName?: string;
  tagline?: string;
}

export const ProfessionalV2: React.FC<Props> = ({
  brandName = "COSTMETIKA",
  tagline = "LUXURY BEAUTY, REDEFINED"
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#F0EAE1" }}>
      {/* SCENE 1: Elegant Brand Reveal (0-180 frames / 0-6s) */}
      <Sequence from={0} durationInFrames={180}>
        <Scene1 brandName={brandName} />
      </Sequence>

      {/* SCENE 2: Brand Pillars (180-540 frames / 6-18s) */}
      <Sequence from={180} durationInFrames={360}>
        <Scene2 />
      </Sequence>

      {/* SCENE 3: Visual Identity (540-720 frames / 18-24s) */}
      <Sequence from={540} durationInFrames={180}>
        <Scene3 />
      </Sequence>

      {/* SCENE 4: Final CTA (720-900 frames / 24-30s) */}
      <Sequence from={720} durationInFrames={180}>
        <Scene4 tagline={tagline} />
      </Sequence>
    </AbsoluteFill>
  );
};

// SCENE 1: ELEGANT BRAND REVEAL
const Scene1: React.FC<{ brandName: string }> = ({ brandName }) => {
  const frame = useCurrentFrame();

  // Fade in background
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Geometric accent
  const accentScale = spring({
    frame: frame - 10,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 150, stiffness: 80 },
  });

  const accentRotate = interpolate(frame, [10, 180], [0, 180], {
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    extrapolateRight: "clamp",
  });

  // Character-by-character reveal
  const chars = brandName.split("");

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F0EAE1",
        opacity: bgOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Animated geometric accent */}
      <div
        style={{
          position: "absolute",
          width: 350 * accentScale,
          height: 350 * accentScale,
          backgroundColor: "#FF5C8A",
          transform: `rotate(${accentRotate}deg)`,
          opacity: 0.12,
          borderRadius: "30px",
        }}
      />

      {/* Brand name with staggered character reveal */}
      <div
        style={{
          display: "flex",
          gap: "0.15rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {chars.map((char, i) => {
          const charDelay = 30 + i * 5;

          const charOpacity = spring({
            frame: frame - charDelay,
            fps: 30,
            from: 0,
            to: 1,
            config: { damping: 200 },
          });

          const charY = spring({
            frame: frame - charDelay,
            fps: 30,
            from: 60,
            to: 0,
            config: { damping: 170 },
          });

          const charScale = spring({
            frame: frame - charDelay,
            fps: 30,
            from: 0.7,
            to: 1,
            config: { damping: 180 },
          });

          return (
            <span
              key={i}
              style={{
                fontSize: 130,
                fontWeight: 900,
                color: "#000000",
                fontFamily: "Arial Black, sans-serif",
                letterSpacing: "-0.05em",
                opacity: charOpacity,
                transform: `translateY(${charY}px) scale(${charScale})`,
                display: "inline-block",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Tagline with elegant fade-in */}
      <TaglineReveal frame={frame} delay={95} />

      {/* Decorative line */}
      <DecorativeLine frame={frame} delay={110} />
    </AbsoluteFill>
  );
};

const TaglineReveal: React.FC<{ frame: number; delay: number }> = ({ frame, delay }) => {
  const opacity = spring({
    frame: frame - delay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  const y = spring({
    frame: frame - delay,
    fps: 30,
    from: 25,
    to: 0,
    config: { damping: 180 },
  });

  return (
    <div
      style={{
        marginTop: 50,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <p
        style={{
          fontSize: 30,
          fontWeight: 500,
          color: "#000000",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Luxury Beauty, Redefined
      </p>
    </div>
  );
};

const DecorativeLine: React.FC<{ frame: number; delay: number }> = ({ frame, delay }) => {
  const width = spring({
    frame: frame - delay,
    fps: 30,
    from: 0,
    to: 500,
    config: { damping: 180 },
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 150,
        height: 3,
        width,
        backgroundColor: "#FF5C8A",
        opacity: 0.6,
      }}
    />
  );
};

// SCENE 2: BRAND PILLARS WITH PROFESSIONAL TIMING
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const pillars = [
    { title: "Education First", subtitle: "Know Before You Glow" },
    { title: "Inclusive Beauty", subtitle: "Beauty For Everyone" },
    { title: "Transparent Luxury", subtitle: "Quality You Can Trust" },
  ];

  // Each pillar gets 120 frames (4 seconds)
  const pillarDuration = 120;
  const currentPillarIndex = Math.floor(frame / pillarDuration) % pillars.length;
  const pillarFrame = frame % pillarDuration;

  const currentPillar = pillars[currentPillarIndex];

  // Smooth entrance and exit with easing
  const opacity = interpolate(
    pillarFrame,
    [0, 20, 100, 120],
    [0, 1, 1, 0],
    {
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = spring({
    frame: pillarFrame,
    fps: 30,
    from: 0.85,
    to: 1,
    config: { damping: 200 },
  });

  const slideY = spring({
    frame: pillarFrame,
    fps: 30,
    from: 40,
    to: 0,
    config: { damping: 180 },
  });

  // Pink accent expands
  const accentWidth = spring({
    frame: pillarFrame,
    fps: 30,
    from: 0,
    to: 100,
    config: { damping: 180 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F0EAE1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Pink accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          width: `${accentWidth}%`,
          height: 10,
          backgroundColor: "#FF5C8A",
          transform: "translateY(-50%)",
          opacity: 0.4,
        }}
      />

      {/* Pillar content */}
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `scale(${scale}) translateY(${slideY}px)`,
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#000000",
            fontFamily: "Arial Black, sans-serif",
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 0.95,
          }}
        >
          {currentPillar.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FF5C8A",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.12em",
            marginTop: 35,
            textTransform: "uppercase",
          }}
        >
          {currentPillar.subtitle}
        </p>
      </div>

      {/* Progress dots */}
      <ProgressDots
        total={pillars.length}
        current={currentPillarIndex}
        frame={pillarFrame}
      />
    </AbsoluteFill>
  );
};

const ProgressDots: React.FC<{
  total: number;
  current: number;
  frame: number;
}> = ({ total, current, frame }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 25,
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;

        const scale = isActive
          ? spring({
              frame,
              fps: 30,
              from: 1,
              to: 1.4,
              config: { damping: 140 },
            })
          : 1;

        return (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: isActive ? "#FF5C8A" : "#000000",
              opacity: isActive ? 1 : 0.25,
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

// SCENE 3: VISUAL IDENTITY - COLOR SHOWCASE
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // Color blocks slide in
  const leftX = spring({
    frame,
    fps: 30,
    from: -700,
    to: 0,
    config: { damping: 180, stiffness: 70 },
  });

  const rightX = spring({
    frame,
    fps: 30,
    from: 700,
    to: 0,
    config: { damping: 180, stiffness: 70 },
  });

  // Text appears after blocks settle
  const textDelay = 70;
  const textOpacity = spring({
    frame: frame - textDelay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  const textScale = spring({
    frame: frame - textDelay,
    fps: 30,
    from: 0.9,
    to: 1,
    config: { damping: 180 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F0EAE1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left block - Beauty Pink */}
      <div
        style={{
          position: "absolute",
          left: leftX,
          top: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "#FF5C8A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: textOpacity,
            transform: `scale(${textScale})`,
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            #FF5C8A
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.2em",
              marginTop: 25,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Beauty Pink
          </div>
        </div>
      </div>

      {/* Right block - Timeless Black */}
      <div
        style={{
          position: "absolute",
          right: rightX,
          top: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: textOpacity,
            transform: `scale(${textScale})`,
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            #000000
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#FF5C8A",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.2em",
              marginTop: 25,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Timeless
          </div>
        </div>
      </div>

      {/* Center - Bone White showcase */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          opacity: textOpacity,
          transform: `scale(${textScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: "#F0EAE1",
            border: "6px solid #000000",
            padding: "70px 90px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 900,
              color: "#000000",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            #F0EAE1
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FF5C8A",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.2em",
              marginTop: 20,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Bone White
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// SCENE 4: FINAL CTA WITH LAYERED REVEAL
const Scene4: React.FC<{ tagline: string }> = ({ tagline }) => {
  const frame = useCurrentFrame();

  // Staggered entrance timing
  const logoDelay = 0;
  const taglineDelay = 55;
  const ctaDelay = 105;

  // Logo animation
  const logoOpacity = spring({
    frame: frame - logoDelay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  const logoY = spring({
    frame: frame - logoDelay,
    fps: 30,
    from: -50,
    to: 0,
    config: { damping: 170 },
  });

  // Tagline animation
  const taglineOpacity = spring({
    frame: frame - taglineDelay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  const taglineScale = spring({
    frame: frame - taglineDelay,
    fps: 30,
    from: 0.85,
    to: 1,
    config: { damping: 180 },
  });

  // CTA animation
  const ctaOpacity = spring({
    frame: frame - ctaDelay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  // Subtle pulse effect for CTA
  const ctaPulse =
    frame > ctaDelay + 35
      ? 1 + Math.sin((frame - ctaDelay - 35) / 22) * 0.04
      : 1;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F0EAE1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: -250,
          right: -250,
          width: 700,
          height: 700,
          backgroundColor: "#FF5C8A",
          opacity: 0.08,
          borderRadius: "50%",
        }}
      />

      {/* Logo */}
      <h1
        style={{
          fontSize: 150,
          fontWeight: 900,
          color: "#000000",
          fontFamily: "Arial Black, sans-serif",
          letterSpacing: "-0.05em",
          margin: 0,
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
          lineHeight: 1,
        }}
      >
        COSTMETIKA
      </h1>

      {/* Tagline box */}
      <div
        style={{
          marginTop: 60,
          opacity: taglineOpacity,
          transform: `scale(${taglineScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: "#000000",
            padding: "35px 90px",
            border: "8px solid #FF5C8A",
          }}
        >
          <p
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "0.12em",
              margin: 0,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {tagline}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 85,
          opacity: ctaOpacity,
          transform: `scale(${ctaPulse})`,
        }}
      >
        <p
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#FF5C8A",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Discover Your Beauty
        </p>
      </div>

      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          bottom: 110,
          width: 450,
          height: 5,
          backgroundColor: "#FF5C8A",
          opacity: ctaOpacity * 0.7,
        }}
      />
    </AbsoluteFill>
  );
};
