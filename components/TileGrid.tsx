import { css } from '@emotion/react';
import animatedTiles, { tileBlue } from './icons/animated-tiles';
import { RandomTile } from './NavPage';

export const TileGrid = (props: {
  className?: string;
  contents: React.ReactNode;
  theme?: 'black' | 'blue';
}): JSX.Element => {
  const widthElements = 17;
  const heightElements = 12;

  const centerWidthElements = 3;
  const centerHeightElements = 6;

  const width = 120;

  const startCenterWidthElement = Math.floor(
    widthElements / 2 - centerWidthElements / 2
  );
  const startCenterHeightElement = Math.floor(
    heightElements / 2 - centerHeightElements / 2
  );

  return (
    <div
      className={props.className}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100svh;
      `}
    >
      <div
        css={css`
          flex: 0;
          flex-shrink: 0;
          flex-basis: ${widthElements * width}px;
          display: block;
        `}
      >
        {Array.from(new Array(heightElements)).map((_, row) =>
          Array.from(new Array(widthElements)).map((_, col) => {
            if (
              row === startCenterHeightElement &&
              col === startCenterWidthElement
            ) {
              return (
                <div
                  key={row * widthElements + col}
                  css={css`
                    width: ${width}px;
                    height: ${width}px;
                    display: inline-block;
                    position: relative;
                  `}
                >
                  <div
                    css={css`
                      background: ${props.theme === 'blue' ? 'white' : 'black'};
                      position: absolute;
                      border: ${width / 60}px solid
                        ${props.theme === 'blue' ? tileBlue : 'white'};
                      border-radius: ${width / 20}px;
                      top: 0px;
                      left: 0px;
                      width: ${width * centerWidthElements}px;
                      height: ${width * centerHeightElements}px;
                      color: ${props.theme === 'blue' ? tileBlue : 'white'};
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    {props.contents}
                  </div>
                  {animatedTiles[0]({ width, theme: props.theme ?? 'black' })}
                </div>
              );
            } else if (
              startCenterHeightElement <= row &&
              row < startCenterHeightElement + centerHeightElements &&
              startCenterWidthElement <= col &&
              col < startCenterWidthElement + centerWidthElements
            ) {
              return animatedTiles[0]({ width, theme: props.theme ?? 'black' });
            } else {
              return (
                <RandomTile
                  key={row * widthElements + col}
                  width={width}
                  theme={props.theme ?? 'black'}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};
