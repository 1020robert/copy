import { css } from '@emotion/react';
import Letterhead from './icons/letterhead';
import animatedTiles, { AnimatedTileProps } from './icons/animated-tiles';
import { useEffect, useRef, useState } from 'react';
import { sectionIcons } from './icons/sections';
import Vivus from 'vivus';
import { TileGrid } from './TileGrid';
import Link from 'next/link';

export const RandomTile = (props: AnimatedTileProps): JSX.Element => {
  const [randomIndex, setRandomIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * (animatedTiles.length - 1)) + 1);
  }, []);

  if (randomIndex !== undefined) {
    const Tile = animatedTiles[randomIndex];
    return <Tile {...props} />;
  } else {
    const Tile = animatedTiles[0];
    return <Tile {...props} />;
  }
};

const NavButton = (props: {
  iconKey: keyof typeof sectionIcons;
  title: string;
  size?: 'large' | 'small';
  href: string;
  onClick?: () => void;
}): JSX.Element => {
  const playing = useRef(false);

  const Icon = sectionIcons[props.iconKey];
  const svgId = 'nav-button-' + props.iconKey;

  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      css={css`
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        // Counterintuitive but it looks better to have more padding
        // on the smaller text.
        padding: ${props.size === 'large' ? '8px' : '9px'};

        margin: 7px 0px;
        cursor: pointer;
        font-family: wayfinder-cf, serif;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      `}
      onMouseOver={() => {
        if (!playing.current) {
          playing.current = true;
          const durationFrames = 50;
          const fps = 60;
          const vivus = new Vivus(svgId, {
            start: 'manual',
            duration: durationFrames,
          });
          vivus.finish();
          vivus.play(-1, () => {
            vivus.play(1, () => {
              // For some reason this callback doesn't work, hence the setTimeout.
            });
          });
          setTimeout(() => {
            playing.current = false;
          }, (1 / fps) * 1000 * durationFrames * 2);
        }
      }}
    >
      <Icon
        css={css`
          width: ${props.size === 'large' ? '27px' : '20px'};
          margin-right: 8px;
        `}
        svgId={svgId}
      />
      <div
        css={css`
          font-size: ${props.size === 'large' ? '22px' : '16px'};
        `}
      >
        {props.title}
      </div>
    </Link>
  );
};

export const NavContents = (props: {
  className?: string;
  size?: 'large' | 'small';
  onHideNav?: () => void;
}): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      className={props.className}
    >
      <Link
        href="/read"
        css={css`
          color: white;
        `}
        onClick={props.onHideNav}
      >
        <Letterhead
          css={css`
            width: ${props.size === 'large' ? '160px' : '110px'};
            margin-bottom: ${props.size === 'large' ? '15px' : '3px'};
          `}
        />
      </Link>
      <div>
        <NavButton
          iconKey="home"
          title="Home"
          size={props.size}
          href="/read"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="parodies"
          title="Parodies"
          size={props.size}
          href="/parodies"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="magazines"
          title="Archive"
          size={props.size}
          href="/archive"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="search"
          title="Search"
          size={props.size}
          href="/search"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="masthead"
          title="Masthead"
          size={props.size}
          href="/masthead"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="about"
          title="About"
          size={props.size}
          href="/about"
          onClick={props.onHideNav}
        />
        <NavButton
          iconKey="comp"
          title="Comp"
          size={props.size}
          href="/comp"
          onClick={props.onHideNav}
        />
      </div>
    </div>
  );
};

const NavPage = (props: {
  theme?: 'black' | 'blue';
  className?: string;
  onHideNav?: () => void;
}): JSX.Element => {
  return (
    <TileGrid
      contents={<NavContents size="large" onHideNav={props.onHideNav} />}
      theme={props.theme}
      className={props.className}
      css={css`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100svh;
        z-index: 1;
      `}
    />
  );
};

export default NavPage;
