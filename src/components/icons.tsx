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

// path จาก public/smilist-logo.svg; ซี่เทาเหลื่อมขวา 1/3 ของความกว้างฟัน
const TOOTH_PATH =
  'M24.6 117.2C48.9 130.1 69.2 122.4 88.5 108.7C101 99.6 110.3 87.5 120.5 76.3C130.8 65.1 143.3 51 155.8 39.6C183.1 14.7 224.6 22 242.9 58.1C245.3 62.7 247.2 67.4 248.5 72.4C249.8 77.4 250.4 82.5 250.4 87.7C250.2 104.7 249.7 121.6 249.3 138.4C247.5 135.3 246.2 131.9 244.5 128.8C232.5 105 208.9 97.3 185.2 109.1C168.2 117.6 155.1 130.5 144.5 146C130.4 166.6 117.6 188 104.1 209.1C97.5 219.3 90.8 229.5 83.8 239.4C80.8 243.5 77.2 247.1 73 250.2C67.2 254.6 61.4 254.6 57.2 248.8C52 242 47.7 234.6 44.5 226.7C36 204.5 32.1 181.3 29.2 157.7C27.5 144.6 26.1 131.3 24.6 117.2ZM144.3 161.6C154.5 146.7 165.1 132.6 180 123C186.7 118.7 194 115.6 201.8 113.7C214.1 110.4 224 115.7 231.5 125.5C242.3 139.6 246 156 244.3 173.2C242.3 192.4 237.9 211.1 231.1 229.2C228.7 235.4 225.6 241.3 221.7 246.7C215.9 254.6 208.7 255.8 201.2 249.4C194.7 244 189.2 237.6 184.8 230.3C177.5 218.5 171.5 206 164.9 193.6C158.4 181.3 153.9 170.7 144.3 161.6ZM127.9 54.3C112.4 70.1 100.6 88.6 82.7 101.6C71.9 109.5 60.3 115.5 46.4 114.5C41.6 114.1 37 112.8 32.7 110.6C27.1 108.1 24 103.7 24 96.5C24 83.4 24.8 70.5 30.4 58.1C41.2 34 68 20.3 91.4 27.2C106.4 31.7 117.6 41.5 127.9 54.3Z'

export const ToothLogo = () => (
  <svg width="47" height="36" viewBox="24 24 302 231" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d={TOOTH_PATH} transform="translate(75.5)" fill="#D9D3D2" />
    <path d={TOOTH_PATH} fill="var(--accent)" />
  </svg>
)
