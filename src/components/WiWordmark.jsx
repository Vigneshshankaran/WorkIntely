import React, { useId } from 'react';

/* The "Wi" mark drawn inline so it can sit in a text line and inherit its size.
   Geometry traces the logo artwork: one rounded zigzag stroke for the W, a
   rounded stem plus dot for the i, all filled with the purple-to-blue ramp. */
export default function WiWordmark({ className = '', title = 'Wi' }) {
  const gradientId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 940 575"
      role="img"
      aria-label={title}
      focusable="false"
    >
      <defs>
        {/* userSpaceOnUse, not the default objectBoundingBox: the i's stem is a
            vertical line, and a zero-width bbox makes an objectBoundingBox
            gradient skip painting the element entirely. Mapping to user space
            also runs one continuous ramp across the whole mark. */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="940"
          y2="316"
        >
          <stop offset="0%" stopColor="#9b2ff5" />
          <stop offset="48%" stopColor="#3b3ef2" />
          <stop offset="100%" stopColor="#0a84ff" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="112"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M57 60 L265 515 L435 110 L605 515 L785 60" />
        <path d="M885 298 L885 515" />
      </g>

      <circle cx="885" cy="170" r="62" fill={`url(#${gradientId})`} />
    </svg>
  );
}
