import { css, keyframes } from '@emotion/react';

const progressKeyframes = keyframes`
  0% {
    stroke-dashoffset: 180;
  }

  20% {
    stroke-dashoffset: 180;
  }

  40% {
    stroke-dashoffset: 350;
  }

  60% {
    stroke-dashoffset: 400;
  }

  90% {
    stroke-dashoffset: 500;
  }

  100% {
    stroke-dashoffset: 600;
  }
`;

const flickerKeyframes = keyframes`
  0% {
    stop-opacity: 0;
  }

  20% {
    stop-opacity: 0.1;
  }

  50% {
    stop-opacity: 0;
  }

  100% {
    stop-opacity: 0.1;
  }
`;

const openDoorKeyframes = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: rotateY(-80deg);
    opacity: 0.01;
  }
`;

const DOOR_BACKGROUND = '#190019';

const overallOpacityKeyframes = keyframes`
  0% {
    opacity: 1;
    pointer-events: default;
  }

  99% {
    pointer-events: default;
  }

  100% {
    opacity: 0;
    pointer-events: none;
  }
`;

const Door = (): JSX.Element => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100svh;
        width: 100vw;
        background-color: ${DOOR_BACKGROUND};
        animation: ${overallOpacityKeyframes} 1s ease both;
        animation-delay: 5s;
        z-index: 3;
      `}
    >
      <div
        css={css`
          height: 100svh;
          width: 100vw;
          text-align: center;
          position: relative;
          perspective: 220svh;
        `}
      >
        <svg
          width="393px"
          height="852px"
          viewBox="0 0 393 852"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          css={css`
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: -400px;
            right: -400px;
            top: 0px;
            height: 100%;
            aspect-ratio: 393 / 852;
            transform-origin: right;
            animation: ${openDoorKeyframes} 1s ease both;
            animation-delay: 4s;
          `}
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <rect
                fill={DOOR_BACKGROUND}
                x="0"
                y="0"
                width="393"
                height="852"
              ></rect>
              <path
                d="M196.5,424.179659 L393,852 L0,852 L196.5,424.179659 Z M196.5,423.840617 L393,0 L0,0 L196.5,423.840617 Z"
                fill="#C47B37"
              ></path>
              <g transform="translate(29.378, 65)" fill="#000000">
                <rect x="0" y="0" width="39.6488013" height="39.6488013"></rect>
                <rect
                  x="73.6488013"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="147.297603"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="220.946404"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="294.595205"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
              </g>
              <g transform="translate(29.378, 752.3512)" fill="#000000">
                <rect x="0" y="0" width="39.6488013" height="39.6488013"></rect>
                <rect
                  x="73.6488013"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="147.297603"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="220.946404"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
                <rect
                  x="294.595205"
                  y="0"
                  width="39.6488013"
                  height="39.6488013"
                ></rect>
              </g>
              <circle fill="#C47B37" cx="196.5" cy="426" r="102"></circle>
              <rect
                fill="#000000"
                x="176.675599"
                y="268"
                width="39.6488013"
                height="39.6488013"
              ></rect>
              <rect
                fill="#000000"
                x="305.675599"
                y="406.175599"
                width="39.6488013"
                height="39.6488013"
              ></rect>
              <rect
                fill="#000000"
                x="47.6755993"
                y="406.175599"
                width="39.6488013"
                height="39.6488013"
              ></rect>
              <rect
                fill="#000000"
                x="176.675599"
                y="544.351199"
                width="39.6488013"
                height="39.6488013"
              ></rect>
              <path
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                fill="none"
                stroke="#791414"
                strokeWidth="150"
                strokeDasharray="0 600 600 0"
                strokeDashoffset="120" // 600 is max, 120 is before start
                css={css`
                  animation: ${progressKeyframes} 2.5s ease-in-out both;
                  animation-delay: 1s;
                `}
                transform="translate(51,372) rotate(90,100,100) scale(0.54)"
              ></path>
            </g>
          </g>
        </svg>

        <svg
          css={css`
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            mix-blend-mode: hard-light;
            opacity: 0.1;
          `}
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="turbulence"
                baseFrequency="0.052"
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="7"
                specularConstant="0.5"
                specularExponent="20"
                lightingColor="#fff"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="189"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="black"></rect>
          <rect
            width="100%"
            height="100%"
            fill="#ffffff"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
        <FlickerOverlay />
      </div>
    </div>
  );
};

export const FlickerOverlay = (): JSX.Element => {
  return (
    <svg
      css={css`
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
      `}
      viewBox="0 0 100% 100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          cx="33.870439%"
          cy="41.387271%"
          fx="33.870439%"
          fy="41.387271%"
          r="167.538722%"
          gradientTransform="translate(0.3387, 0.4139), scale(1, 0.4613), rotate(90), translate(-0.3387, -0.4139)"
          id="radialGradient-42qkp2jppg-1"
        >
          <stop
            stopColor="#000000"
            css={css`
              animation: ${flickerKeyframes} 0.8s alternate-reverse infinite;
            `}
            offset="0%"
          ></stop>
          <stop stopColor="#000000" stopOpacity="1" offset="100%"></stop>
        </radialGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="url(#radialGradient-42qkp2jppg-1)">
          <rect id="Rectangle" x="0" y="0" width="100%" height="100%"></rect>
        </g>
      </g>
    </svg>
  );
};

export default Door;
