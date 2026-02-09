import { AbsoluteFill, useCurrentFrame, interpolate, spring, Easing, Sequence } from "remotion";
import { TransitionSeries, fade, slide } from "@remotion/transitions";

interface Props {
  brandName?: string;
  tagline?: string;
}

export const ProfessionalBrandVideo: React.FC<Props> = ({
  brandName = "COSTMETIKA",
  tagline = "LUXURY BEAUTY, REDEFINED"
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#F0EAE1" }}>
      <TransitionSeries>
        {/* SCENE 1: Brand Reveal (0-180 frames / 0-6s) */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene1 brandName={brandName} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
        />

        {/* SCENE 2: Brand Pillars Showcase (180-480 frames / 6-16s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <Scene2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
        />

        {/* SCENE 3: Visual Identity (480-660 frames / 16-22s) */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene3 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
        />

        {/* SCENE 4: Final Message (660-900 frames / 22-30s) */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene4 tagline={tagline} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

// SCENE 1: ELEGANT BRAND REVEAL
const Scene1: React.FC<{ brandName: string }> = ({ brandName }) => {
  const frame = useCurrentFrame();

  // Staggered character reveal
  const chars = brandName.split("");

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F0EAE1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Animated geometric accent */}
      <GeometricAccent frame={frame} />

      {/* Brand name with character-by-character reveal */}
      <div
        style={{
          display: "flex",
          gap: "0.2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {chars.map((char, i) => {
          const charDelay = 20 + i * 4;
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
            from: 50,
            to: 0,
            config: { damping: 180 },
          });

          return (
            <span
              key={i}
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: "#000000",
                fontFamily: "Arial Black, sans-serif",
                letterSpacing: "-0.05em",
                opacity: charOpacity,
                transform: `translateY(${charY}px)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Subtle tagline fade-in */}
      <TaglineFadeIn frame={frame} delay={80} />
    </AbsoluteFill>
  );
};

// Geometric accent animation
const GeometricAccent: React.FC<{ frame: number }> = ({ frame }) => {
  const scale = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 150, stiffness: 80 },
  });

  const rotate = interpolate(frame, [0, 180], [0, 180], {
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        width: 300 * scale,
        height: 300 * scale,
        backgroundColor: "#FF5C8A",
        transform: `rotate(${rotate}deg)`,
        opacity: 0.15,
        borderRadius: "20px",
      }}
    />
  );
};

// Tagline component
const TaglineFadeIn: React.FC<{ frame: number; delay: number }> = ({
  frame,
  delay,
}) => {
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
    from: 20,
    to: 0,
    config: { damping: 180 },
  });

  return (
    <div
      style={{
        marginTop: 40,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <p
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: "#000000",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Luxury Beauty, Redefined
      </p>
    </div>
  );
};

// SCENE 2: BRAND PILLARS WITH PROFESSIONAL PACING
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const pillars = [
    { title: "Education First", subtitle: "Know Before You Glow" },
    { title: "Inclusive Beauty", subtitle: "Beauty For Everyone" },
    { title: "Transparent Luxury", subtitle: "Quality You Can Trust" },
  ];

  // Show each pillar for 100 frames (3.33s each)
  const pillarDuration = 100;
  const currentPillarIndex = Math.floor(frame / pillarDuration) % pillars.length;
  const pillarFrame = frame % pillarDuration;

  const currentPillar = pillars[currentPillarIndex];

  // Smooth entrance and exit
  const opacity = interpolate(
    pillarFrame,
    [0, 15, 85, 100],
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
    from: 0.9,
    to: 1,
    config: { damping: 200 },
  });

  const slideY = spring({
    frame: pillarFrame,
    fps: 30,
    from: 30,
    to: 0,
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
          width: "100%",
          height: 8,
          backgroundColor: "#FF5C8A",
          transform: "translateY(-50%)",
          opacity: 0.3,
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
            fontSize: 100,
            fontWeight: 900,
            color: "#000000",
            fontFamily: "Arial Black, sans-serif",
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {currentPillar.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#FF5C8A",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.1em",
            marginTop: 30,
            textTransform: "uppercase",
          }}
        >
          {currentPillar.subtitle}
        </p>
      </div>

      {/* Progress indicator */}
      <ProgressDots
        total={pillars.length}
        current={currentPillarIndex}
        frame={pillarFrame}
      />
    </AbsoluteFill>
  );
};

// Progress dots component
const ProgressDots: React.FC<{ total: number; current: number; frame: number }> = ({
  total,
  current,
  frame,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 100,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 20,
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        const scale = isActive
          ? spring({
              frame,
              fps: 30,
              from: 1,
              to: 1.3,
              config: { damping: 150 },
            })
          : 1;

        return (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: isActive ? "#FF5C8A" : "#000000",
              opacity: isActive ? 1 : 0.3,
              transform: `scale(${scale})`,
              transition: "background-color 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
};

// SCENE 3: VISUAL IDENTITY - COLOR PALETTE
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // Color blocks slide in from sides
  const leftSlide = spring({
    frame,
    fps: 30,
    from: -600,
    to: 0,
    config: { damping: 180, stiffness: 80 },
  });

  const rightSlide = spring({
    frame,
    fps: 30,
    from: 600,
    to: 0,
    config: { damping: 180, stiffness: 80 },
  });

  // Text appears after colors settle
  const textDelay = 60;
  const textOpacity = spring({
    frame: frame - textDelay,
    fps: 30,
    from: 0,
    to: 1,
    config: { damping: 200 },
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
      {/* Left color block - Pink */}
      <div
        style={{
          position: "absolute",
          left: leftSlide,
          top: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "#FF5C8A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ opacity: textOpacity }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            #FF5C8A
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.15em",
              marginTop: 20,
              textTransform: "uppercase",
            }}
          >
            Beauty Pink
          </div>
        </div>
      </div>

      {/* Right color block - Black */}
      <div
        style={{
          position: "absolute",
          right: rightSlide,
          top: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ opacity: textOpacity }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            #000000
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FF5C8A",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.15em",
              marginTop: 20,
              textTransform: "uppercase",
            }}
          >
            Timeless
          </div>
        </div>
      </div>

      {/* Center bone white reference */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: "#F0EAE1",
            border: "4px solid #000000",
            padding: "60px 80px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#000000",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            #F0EAE1
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#FF5C8A",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.15em",
              marginTop: 15,
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

// SCENE 4: FINAL MESSAGE WITH CALL TO ACTION
const Scene4: React.FC<{ tagline: string }> = ({ tagline }) => {
  const frame = useCurrentFrame();

  // Layered entrance: logo → tagline → CTA
  const logoDelay = 0;
  const taglineDelay = 50;
  const ctaDelay = 100;

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
    from: -40,
    to: 0,
    config: { damping: 180 },
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
    from: 0.9,
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

  // Subtle breathing animation for CTA
  const ctaPulse =
    frame > ctaDelay + 30
      ? 1 + Math.sin((frame - ctaDelay - 30) / 20) * 0.03
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
      {/* Background geometric accent */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          backgroundColor: "#FF5C8A",
          opacity: 0.08,
          borderRadius: "50%",
        }}
      />

      {/* Logo */}
      <h1
        style={{
          fontSize: 140,
          fontWeight: 900,
          color: "#000000",
          fontFamily: "Arial Black, sans-serif",
          letterSpacing: "-0.05em",
          margin: 0,
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
        }}
      >
        COSTMETIKA
      </h1>

      {/* Tagline */}
      <div
        style={{
          marginTop: 50,
          opacity: taglineOpacity,
          transform: `scale(${taglineScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: "#000000",
            padding: "30px 80px",
            border: "6px solid #FF5C8A",
          }}
        >
          <p
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FFFFFF",
              fontFamily: "Arial Black, sans-serif",
              letterSpacing: "0.1em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {tagline}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 80,
          opacity: ctaOpacity,
          transform: `scale(${ctaPulse})`,
        }}
      >
        <p
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#FF5C8A",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Discover Your Beauty
        </p>
      </div>

      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: 400,
          height: 4,
          backgroundColor: "#FF5C8A",
          opacity: ctaOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
