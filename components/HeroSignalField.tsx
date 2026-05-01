"use client";

import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";

const capabilityPills = [
  {
    label: "Distributed Data",
    position: "left-[6%] top-[16%]",
    xFactor: 0.42,
    yFactor: 0.28,
    delay: 0.2
  },
  {
    label: "Analytics Systems",
    position: "left-[14%] top-[48%]",
    xFactor: -0.32,
    yFactor: 0.36,
    delay: 0.95
  },
  {
    label: "Graph Analytics",
    position: "left-[44%] top-[21%]",
    xFactor: 0.34,
    yFactor: -0.24,
    delay: 1.65
  },
  {
    label: "AI Interfaces",
    position: "right-[12%] top-[38%]",
    xFactor: -0.38,
    yFactor: 0.26,
    delay: 2.35
  },
  {
    label: "RL Optimization",
    position: "right-[10%] bottom-[23%]",
    xFactor: 0.28,
    yFactor: -0.34,
    delay: 3.05
  }
] as const;

type FloatingPillProps = {
  delay: number;
  label: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  position: string;
  reducedMotion: boolean;
  xFactor: number;
  yFactor: number;
};

function FloatingPill({
  delay,
  label,
  mouseX,
  mouseY,
  position,
  reducedMotion,
  xFactor,
  yFactor
}: FloatingPillProps) {
  const x = useSpring(useTransform(mouseX, (value) => value * xFactor), {
    stiffness: 110,
    damping: 20,
    mass: 0.8
  });
  const y = useSpring(useTransform(mouseY, (value) => value * yFactor), {
    stiffness: 110,
    damping: 20,
    mass: 0.8
  });

  return (
    <motion.div
      className={`absolute ${position}`}
      style={reducedMotion ? undefined : { x, y }}
    >
      <motion.div
        className="rounded-full border border-accent/14 bg-surface/52 px-3.5 py-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-muted shadow-[0_10px_18px_rgb(var(--accent-shadow)/0.04)] backdrop-blur-md dark:bg-surface/36"
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -3, 0],
                opacity: [0.7, 0.9, 0.76],
                scale: [1, 1.012, 1]
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export function HeroSignalField() {
  const reducedMotion = useReducedMotion() ?? false;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(offsetX * 18);
    mouseY.set(offsetY * 16);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="relative hidden h-full min-h-[18.5rem] overflow-hidden lg:block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0"
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -7, 0],
                opacity: [0.92, 1, 0.95]
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_38%,rgb(var(--accent-start)/0.155),transparent_33%),radial-gradient(circle_at_40%_70%,rgb(var(--accent-mid)/0.11),transparent_29%),radial-gradient(circle_at_72%_56%,rgb(var(--accent-end)/0.072),transparent_23%)]" />

        <svg
          viewBox="0 0 420 320"
          className="absolute inset-0 h-full w-full opacity-76"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="signalGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(var(--accent-start))" stopOpacity="0.15" />
              <stop offset="52%" stopColor="rgb(var(--accent-mid))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(var(--accent-end))" stopOpacity="0.22" />
            </linearGradient>
          </defs>

          <path
            d="M24 112C76 106 116 118 156 136C194 152 230 178 274 182C324 186 362 168 396 136"
            fill="none"
            stroke="url(#signalGradient)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeDasharray="3 10"
          />
          <path
            d="M44 240C98 224 126 202 170 202C214 202 240 228 284 230C334 232 368 214 396 190"
            fill="none"
            stroke="url(#signalGradient)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="4 11"
          />

          {[
            { cx: 48, cy: 112, r: 4.5, opacity: 0.06 },
            { cx: 160, cy: 138, r: 6, opacity: 0.08 },
            { cx: 276, cy: 182, r: 5.5, opacity: 0.08 },
            { cx: 392, cy: 136, r: 7, opacity: 0.1 },
            { cx: 286, cy: 230, r: 5.5, opacity: 0.08 }
          ].map((node) => (
            <g key={`${node.cx}-${node.cy}`}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="rgb(var(--surface))"
                fillOpacity="0.78"
                stroke="url(#signalGradient)"
                strokeWidth="1.1"
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 10}
                fill="none"
                stroke="rgb(var(--accent-mid))"
                strokeOpacity={node.opacity}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-[8%] bottom-2 flex items-center gap-3 opacity-72">
        <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgb(var(--accent-mid)/0.22),transparent)]" />
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted/80">
          Data → Systems → Decisions
        </div>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgb(var(--accent-mid)/0.22),transparent)]" />
      </div>

      {capabilityPills.map((pill) => (
        <FloatingPill
          key={pill.label}
          delay={pill.delay}
          label={pill.label}
          mouseX={mouseX}
          mouseY={mouseY}
          position={pill.position}
          reducedMotion={reducedMotion}
          xFactor={pill.xFactor}
          yFactor={pill.yFactor}
        />
      ))}
    </motion.div>
  );
}
