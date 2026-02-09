import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

const pillars = [
  { title: "EDUCATION FIRST", subtitle: "Know Your Beauty" },
  { title: "INCLUSIVE BEAUTY", subtitle: "Beauty for Every Body" },
  { title: "TRANSPARENT LUXURY", subtitle: "Quality You Can Trust" },
  { title: "COMMUNITY", subtitle: "Your Beauty Family" },
  { title: "EFFORTLESS ELEGANCE", subtitle: "Luxury Made Simple" },
];

export const BrandPillarsSlide: React.FC = () => {
  const frame = useCurrentFrame();

  // Title slides in
  const titleSlide = interpolate(frame, [0, 20], [-500, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFFFFF", // WHITE BASE
        fontFamily: "Arial Black, sans-serif",
      }}
    >
      {/* TITLE BAR - BLACK WITH PINK ACCENT */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 180,
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          paddingLeft: 100,
          transform: `translateX(${titleSlide}px)`,
          borderBottom: "16px solid #FF5C8A",
        }}
      >
        <h2
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}
        >
          5 BRAND PILLARS
        </h2>
      </div>

      {/* GRID OF PILLARS - BRUTAL GEOMETRIC LAYOUT */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 100,
          right: 100,
          bottom: 100,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 30,
        }}
      >
        {pillars.map((pillar, index) => (
          <Sequence key={index} from={30 + index * 10}>
            <PillarCard pillar={pillar} index={index} />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const PillarCard: React.FC<{ pillar: any; index: number }> = ({ pillar, index }) => {
  const frame = useCurrentFrame();

  // Stagger animation - brutal drop-in
  const dropIn = interpolate(frame, [0, 15], [-200, 0], {
    extrapolateRight: "clamp",
  });

  const pinkAccent = index % 2 === 0; // Alternate pink accents

  return (
    <div
      style={{
        transform: `translateY(${dropIn}px)`,
        backgroundColor: pinkAccent ? "#FF5C8A" : "#000000",
        border: `8px solid ${pinkAccent ? "#000000" : "#FF5C8A"}`,
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* NUMBER */}
      <div
        style={{
          fontSize: 120,
          fontWeight: 900,
          color: pinkAccent ? "#000000" : "#FFFFFF",
          lineHeight: 1,
          opacity: 0.3,
        }}
      >
        {index + 1}
      </div>

      {/* TITLE */}
      <div>
        <h3
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: pinkAccent ? "#000000" : "#FFFFFF",
            margin: 0,
            marginBottom: 10,
            letterSpacing: "1px",
            lineHeight: 1.1,
          }}
        >
          {pillar.title}
        </h3>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: pinkAccent ? "#000000" : "#CCCCCC",
            margin: 0,
            fontFamily: "Arial, sans-serif",
          }}
        >
          "{pillar.subtitle}"
        </p>
      </div>
    </div>
  );
};
