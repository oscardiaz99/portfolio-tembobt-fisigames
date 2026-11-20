"use client";

const LAYERS = [
  {
    id: "layer-alpha",
    speed: -60,
    style: {
      top: "12%",
      left: "7%",
      width: "22rem",
      height: "22rem",
      background: "radial-gradient(circle, rgba(111, 230, 255, 0.22) 0%, rgba(111, 230, 255, 0) 72%)",
    },
  },
  {
    id: "layer-beta",
    speed: 42,
    style: {
      top: "22%",
      right: "6%",
      width: "20rem",
      height: "20rem",
      background: "radial-gradient(circle, rgba(124, 139, 255, 0.18) 0%, rgba(124, 139, 255, 0) 72%)",
    },
  },
  {
    id: "layer-gamma",
    speed: -26,
    style: {
      bottom: "8%",
      left: "24%",
      width: "28rem",
      height: "18rem",
      background: "radial-gradient(circle, rgba(167, 255, 220, 0.1) 0%, rgba(167, 255, 220, 0) 72%)",
    },
  },
];

export function ParallaxLayers({ reducedMotion, scrollProgress = 0 }) {
  return (
    <div className="scene-stage" aria-hidden="true">
      <div className="parallax-stack">
        {LAYERS.map((layer) => {
          const translateY = reducedMotion ? 0 : (scrollProgress - 0.5) * layer.speed;

          return (
            <div
              key={layer.id}
              className="parallax-layer"
              style={{
                ...layer.style,
                transform: `translate3d(0, ${translateY}px, 0)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
