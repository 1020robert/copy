import { css } from '@emotion/react';
import tiles from './tiles';
import { useEffect, useId, useRef } from 'react';
import Vivus from 'vivus';

export interface AnimatedTileProps {
  width: number;
  theme: 'blue' | 'black';
}

export const tileBlue = '#0F1571';

const animatedTiles = tiles.map((Tile, i) => {
  return function AnimatedTile(props: AnimatedTileProps): JSX.Element {
    const id = useId();
    const playing = useRef(true);

    useEffect(() => {
      // new Vivus(id, { duration: 100 }, () => {
      // }).play();
    }, []);

    return (
      <div
        css={css`
          background: ${borderColor()};
          display: inline-block;
          width: ${props.width}px;
          height: ${props.width}px;
          vertical-align: top;
        `}
        onMouseOver={() => {
          if (!playing.current) {
            playing.current = true;
            const vivus = new Vivus(id, { duration: 100 });
            vivus.finish();
            vivus.play(-1, () => {
              setTimeout(() => {
                vivus.play(1, () => {
                  playing.current = false;
                });
              }, 100);
            });
          }
        }}
      >
        <div
          css={css`
            border: ${props.width / 60}px solid ${borderColor()};
            border-radius: ${props.width / 20}px;
            background: ${backgroundColor()};
            width: ${props.width}px;
            height: ${props.width}px;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            align-items: ${tileProperties[i].position === 'top'
              ? 'flex-start'
              : tileProperties[i].position === 'bottom'
              ? 'flex-end'
              : 'center'};
            justify-content: center;
          `}
        >
          <Tile
            svgId={id}
            css={css`
              color: ${foregroundColor()};
              width: ${tileProperties[i].size === 'small' ? '80%' : '100%'};
            `}
          />
        </div>
      </div>
    );

    function backgroundColor() {
      switch (props.theme) {
        case 'blue':
          return '#fff';
        case 'black':
          return '#000';
      }
    }

    function borderColor() {
      switch (props.theme) {
        case 'blue':
          return tileBlue;
        case 'black':
          return '#fff';
      }
    }

    function foregroundColor() {
      switch (props.theme) {
        case 'blue':
          return tileBlue;
        case 'black':
          return '#fff';
      }
    }
  };
});

export default animatedTiles;

interface TileProperties {
  position?: 'center' | 'top' | 'bottom';
  size?: 'full' | 'almost' | 'small';
}

export const tileProperties: TileProperties[] = [
  {},
  {},
  { size: 'small' },
  { size: 'almost' },
  { size: 'small' },
  {},
  {},
  {},
  {},
  {},
  {},
  { position: 'top' },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
