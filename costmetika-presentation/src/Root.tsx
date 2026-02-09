import { Composition } from "remotion";
import { CoverSlide } from "./slides/CoverSlide";
import { BrandPillarsSlide } from "./slides/BrandPillarsSlide";
import { RevenueSlide } from "./slides/RevenueSlide";
import { FinalVideo } from "./FinalVideo";
import { ProfessionalBrandVideo } from "./ProfessionalBrandVideo";
import { ProfessionalV2 } from "./ProfessionalV2";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Individual Slides - 5 seconds each */}
      <Composition
        id="CoverSlide"
        component={CoverSlide}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="BrandPillarsSlide"
        component={BrandPillarsSlide}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="RevenueSlide"
        component={RevenueSlide}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Final Brand Video - 30 seconds */}
      <Composition
        id="COSTMETIKA-BrandVideo"
        component={FinalVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          brandName: "COSTMETIKA",
          tagline: "Luxury Beauty, Redefined"
        }}
      />

      {/* Professional Brand Video - 30 seconds - Bone White Edition */}
      <Composition
        id="COSTMETIKA-Professional"
        component={ProfessionalBrandVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          brandName: "COSTMETIKA",
          tagline: "LUXURY BEAUTY, REDEFINED"
        }}
      />

      {/* Professional V2 - High Quality Motion Video */}
      <Composition
        id="COSTMETIKA-Pro-V2"
        component={ProfessionalV2}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          brandName: "COSTMETIKA",
          tagline: "LUXURY BEAUTY, REDEFINED"
        }}
      />
    </>
  );
};
