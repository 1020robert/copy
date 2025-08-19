import { css } from '@emotion/react';
import Wordmark from './icons/wordmark';
import React from 'react';
import { NavContents } from './NavPage';

export const mobileNavCutoff = 640;

const MobileNavBar = (props: {
  className?: string;
  onClickShowNav?: () => void;
}): JSX.Element => {
  return (
    <div
      css={css`
        background: black;
        color: white;
        align-items: center;
        justify-content: center;

        display: none;

        @media screen and (max-width: ${mobileNavCutoff}px) {
          display: flex;
        }
      `}
      className={props.className}
    >
      <div
        css={css`
          flex: 1;
        `}
      ></div>
      <Wordmark
        mode="fill"
        css={css`
          width: 200px;
          padding: 12px 0px;
          margin-left: 16px;
        `}
      />
      <div
        css={css`
          flex: 1;
          justify-content: flex-end;
          align-items: flex-end;
          display: flex;
        `}
      >
        <button
          css={css`
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            margin-left: 8px;
          `}
          onClick={props.onClickShowNav}
        >
          <svg
            width="20px"
            viewBox="0 0 115 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-43, -68)"
                stroke="#FFFFFF"
                strokeWidth="16"
              >
                <g transform="translate(43.4496, 75.5)">
                  <line x1="4.15090224e-13" y1="26" x2="115" y2="26"></line>
                  <line x1="4.15090224e-13" y1="0" x2="115" y2="0"></line>
                  <line x1="4.15090224e-13" y1="52" x2="115" y2="52"></line>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

const DesktopNavBarHorizontal = (): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        flex-direction: column;
        background: black;
        color: white;
        padding: 36px 18px 0px;
        height: 100svh;
        overflow: scroll;

        @media screen and (max-width: ${mobileNavCutoff}px) {
          display: none;
        }
      `}
    >
      <NavContents />
    </div>
  );
};

const NavBar = (props: { onClickShowNav?: () => void }): JSX.Element => {
  return (
    <React.Fragment>
      <MobileNavBar onClickShowNav={props.onClickShowNav} />
      <DesktopNavBarHorizontal />
    </React.Fragment>
  );
};

export default NavBar;
