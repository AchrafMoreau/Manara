const WaveSVG = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 849.5 143"
      className="w-full h-auto"
    >
      <g style={{ opacity: 0.5 }}>
        <path
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
          }}
          d="M786.5,80L0,79l0,1l786.8,1l61.9,61.9c0.2,0.2,0.5,0.2,0.7,0 c0.2-0.2,0.2-0.5,0-0.7l-61.9-61.9V0.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5V80z"
        ></path>
      </g>
    </svg>
  );
};

const LineSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="337"
      height="148"
      viewBox="0 0 337 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M91.6464 55.6464C91.8417 55.4512 92.1583 55.4512 92.3536 55.6464C92.5488 55.8417 92.5488 56.1583 92.3536 56.3536L91.6464 55.6464ZM0.646447 146.646L91.6464 55.6464L92.3536 56.3536L1.35355 147.354L0.646447 146.646Z"
        fill="currentColor"
      />
      <path d="M337 56L111 56" stroke="currentColor" />
      <path d="M92 56L92 0" stroke="currentColor" />
    </svg>
  );
};

export {
    LineSvg,
    WaveSVG
}

