import { motion, Variants } from "framer-motion";
import { MouseEventHandler } from 'react';

interface PathProps {
  variants?: Variants;
  d?: string;
  transition?: {
    duration: number;
  };
}

function Path({ variants, d, transition }: PathProps) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      variants={variants}
      d={d}
      transition={transition}
    />
  )
}

interface MenuToggleProps {
  toggle: MouseEventHandler<HTMLButtonElement>;
}

export default function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
}
