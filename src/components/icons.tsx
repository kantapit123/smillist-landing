import type { ReactNode } from 'react'

type IconProps = { size?: number; strokeWidth?: number; children: ReactNode }

function Stroke({ size = 20, strokeWidth = 1.8, children }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const ChatIcon = ({ size }: { size?: number }) => (
  <Stroke size={size}>
    <path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.1-2.9-.4L5 20l1.2-3.3C4.2 15.4 3 13.6 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5z" />
  </Stroke>
)

export const PhoneIcon = ({ size }: { size?: number }) => (
  <Stroke size={size}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Stroke>
)

export const ArrowDownIcon = () => (
  <Stroke size={16}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Stroke>
)

export const ArrowRightIcon = () => (
  <Stroke size={16}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
)

export const ImageIcon = () => (
  <Stroke size={44} strokeWidth={1.5}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="M21 16l-5-5-8 8" />
  </Stroke>
)

export const CheckCircleIcon = () => (
  <Stroke size={22}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.7 2.7L16 9.8" />
  </Stroke>
)

export const CardIcon = () => (
  <Stroke size={22}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </Stroke>
)

export const GlobeIcon = () => (
  <Stroke size={22}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </Stroke>
)

export const CalendarIcon = () => (
  <Stroke size={22}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Stroke>
)

export const PinIcon = () => (
  <Stroke size={40} strokeWidth={1.6}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Stroke>
)

export const SplitArrowsIcon = () => (
  <Stroke size={18} strokeWidth={2}>
    <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
  </Stroke>
)

export const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
)

export const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export const MinusIcon = () => (
  <Stroke size={16} strokeWidth={2}>
    <path d="M5 12h14" />
  </Stroke>
)

export const PlusIcon = () => (
  <Stroke size={16} strokeWidth={2}>
    <path d="M12 5v14M5 12h14" />
  </Stroke>
)

export const ToothLogo = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
    <path
      d="M17 7c-4.5 0-7 3.2-7 7.4 0 3.3 1.6 5.6 2.6 9 .9 3.4 1.3 10.6 4.6 10.6 2.8 0 2.4-6.8 4.6-9.1.5-.5 1.1-.8 1.9-.8"
      fill="#D9D3D2"
    />
    <path
      d="M14 9c-3.6 0-6 2.7-6 6.3 0 2.9 1.4 4.9 2.3 7.9.8 3 1.1 9.3 4 9.3 2.5 0 2.2-6 4.1-8 .5-.5 1-.7 1.6-.7s1.1.2 1.6.7c1.9 2 1.6 8 4.1 8 2.9 0 3.2-6.3 4-9.3.9-3 2.3-5 2.3-7.9C32 11.7 29.6 9 26 9c-2.7 0-4 1.3-6 1.3S16.7 9 14 9z"
      fill="var(--accent)"
    />
  </svg>
)
