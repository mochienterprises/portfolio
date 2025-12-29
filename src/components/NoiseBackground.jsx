import { Dithering } from "@paper-design/shaders-react";

const NoiseBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Dark Mode Dithering */}
      <div className="absolute inset-0 opacity-20 dark:block hidden transition-opacity duration-300">
        <Dithering
          speed={0.5}
          shape="warp"
          type="4x4"
          size={4.6}
          scale={0.62}
          frame={187009.99999999994}
          colorBack="#00000000"
          colorFront="#4a1d7a"
          className="w-full h-full min-w-full min-h-full rounded-none mix-blend-overlay"
        />
      </div>

      {/* Light Mode Dithering (NEW LIGHTER COLOR) */}
      <div className="absolute inset-0 opacity-50 block dark:hidden transition-opacity duration-300">
        <Dithering
          speed={1}
          shape="warp"
          type="4x4"
          size={4.6}
          scale={0.33}
          frame={371306.47899999993}
          colorBack="#FFFFFF"
          colorFront="#E3D3FB"
          className="w-full h-full min-w-full min-h-full rounded-none mix-blend-normal"
        />
      </div>

      {/* Dark overlay - Dark Mode */}
      <div className="absolute inset-0 bg-black/40 dark:block hidden transition-opacity duration-300" />

      {/* Light overlay - Light Mode */}
      <div className="absolute inset-0 bg-white/20 block dark:hidden transition-opacity duration-300" />
    </div>
  );
};

export default NoiseBackground;
