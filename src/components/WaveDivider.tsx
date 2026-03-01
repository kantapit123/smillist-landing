interface WaveDividerProps {
  topColor: string
  bottomColor: string
}

export default function WaveDivider({ topColor, bottomColor }: WaveDividerProps) {
  return (
    <div style={{ lineHeight: 0, display: 'block', marginTop: '-1px' }}>
      <svg
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-10 sm:h-14"
      >
        <rect width="1440" height="64" fill={topColor} />
        <path
          d="M0,56 Q360,10 720,38 Q1080,66 1440,16 L1440,64 L0,64 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
