import { css } from '@emotion/react';
import Link from 'next/link';
import { Publication } from '../../lib/publications';
import React from 'react';
import { Piece } from '../../lib/pieces';

export const ReadGrid = (props: {
  children: React.ReactNode;
  size?: 'medium' | 'small';
}): JSX.Element => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(${props.size === 'small' ? '200px' : '300px'}, 1fr)
        );
        gap: 24px;
        grid-auto-flow: row dense;
      `}
    >
      {props.children}
    </div>
  );
};

export const PublicationCell = (props: {
  publication: Publication;
  className?: string;
}): JSX.Element => {
  return (
    <Link
      href={
        props.publication.openUrl
          ? props.publication.openUrl
          : `/publication/${props.publication.id}`
      }
      css={css`
        display: flex;
        text-decoration: none;
        color: black;
        align-items: center;
      `}
      className={props.className}
    >
      <div
        css={css`
          display: inline-block;
          margin-right: 12px;
          position: relative;
        `}
      >
        <img
          src={props.publication.assetUrl}
          alt={props.publication.title}
          css={css`
            width: 120px;
            margin: none;
            display: block;

            &::after {
              content: 'hi';
            }
          `}
        />
        <div
          css={css`
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
          `}
        ></div>
      </div>
      <div>
        <div
          css={css`
            font-family: wayfinder-cf, serif;
            font-size: 32px;
            font-weight: bold;
          `}
        >
          {props.publication.title}
        </div>
        <div
          css={css`
            font-style: italic;
            margin: 0px 0px 12px;
          `}
        >
          {props.publication.subtitle}
        </div>
        <div
          css={css`
            color: #aaa;
          `}
        >
          {props.publication.descriptionPreview}
        </div>
      </div>
    </Link>
  );
};

export const PieceCell = (props: {
  piece: Piece;
  showPublication?: boolean;
}): JSX.Element => {
  return (
    <Link
      href={`/piece/${props.piece.id}`}
      css={css`
        display: flex;
        text-decoration: none;
        color: black;
        align-items: stretch;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <div
          css={css`
            font-family: wayfinder-cf, serif;
            font-size: 32px;
            font-weight: bold;
            line-height: 0.85em;
            margin-bottom: 12px;
          `}
        >
          {props.piece.title}
        </div>
        <div
          css={css`
            font-style: italic;
            margin: 0px 0px 12px;
          `}
        >
          {(props.showPublication && props.piece.publication) ?? true ? (
            <React.Fragment>
              <i>{props.piece.publication!.title}</i> •{' '}
            </React.Fragment>
          ) : null}
          {props.piece.author?.displayName ? (
            <React.Fragment>
              by {props.piece.author!.displayName}
            </React.Fragment>
          ) : null}
        </div>
        <div
          css={css`
            color: #aaa;
          `}
        >
          {props.piece.bodyPreview}
        </div>
      </div>
      {props.piece.assetUrl ? (
        <div
          css={css`
            height: 64px;
            width: 64px;
            background: center/cover url(${props.piece.assetUrl});
            margin-left: 8px;
            box-shadow: inset 0px -1px 20px 0px rgba(0, 0, 0, 0.1);
          `}
        />
      ) : null}
    </Link>
  );
};

const sectionHeaderColor = '#909090';

export const SectionHeader = (props: {
  title?: string | JSX.Element;
  className?: string;
}): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin: 40px 0px 16px;
      `}
      className={props.className}
    >
      <h3
        css={css`
          font-family: wayfinder-cf, serif;
          font-weight: bold;
          color: ${sectionHeaderColor};
          font-size: 24px;
          margin: 0px;
        `}
      >
        {props.title}
      </h3>
      <SectionDividerLine />
    </div>
  );
};

export const SectionDividerLine = (props: {
  light?: boolean;
  className?: string;
}): JSX.Element => {
  return (
    <div
      css={css`
        border-bottom: 1.25px solid ${props.light ? '#ddd' : sectionHeaderColor};
        margin: 1px 0px 0px 4px;
        flex: 1;
      `}
      className={props.className}
    ></div>
  );
};

export const PageHeader = (props: {
  title: string;
  className?: string;
}): JSX.Element => {
  return (
    <h2
      css={css`
        font-family: wayfinder-cf, serif;
        font-weight: bold;
        font-size: 48px;
        margin: 0px 0px 14px;
        position: relative;
      `}
      className={props.className}
    >
      {props.title}
      <svg
        width="53px"
        height="57px"
        viewBox="0 0 53 57"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          margin: 0px -15px 0px 6px;
          width: 11px;
          vertical-align: -14px;
        `}
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-1906, -312)"
            fill="currentColor"
            fillRule="nonzero"
          >
            <g transform="translate(979.2363, 248.7134) scale(-1, 1) rotate(-180) translate(-979.2363, -248.7134)translate(0, 0)">
              <path
                d="M1927.8702,182.926827 C1926.1702,181.526827 1923.4702,177.926827 1921.7702,174.926827 C1920.0702,171.926827 1915.9702,166.926827 1912.6702,163.726827 C1905.4702,156.926827 1905.1702,154.826827 1910.3702,150.226827 C1912.3702,148.426827 1918.0702,142.726827 1923.0702,137.726827 C1928.0702,132.626827 1932.7702,128.426827 1933.4702,128.426827 C1934.2702,128.426827 1935.7702,129.626827 1936.9702,131.126827 C1938.1702,132.626827 1942.8702,137.626827 1947.4702,142.126827 C1952.56273,147.799344 1955.29607,150.822465 1955.6702,151.196191 C1960.55942,156.261833 1958.04887,158.645994 1955.6702,161.026827 L1944.6702,173.226827 C1938.5702,179.926827 1932.9702,185.426827 1932.1702,185.426827 C1931.4702,185.426827 1929.4702,184.326827 1927.8702,182.926827 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </h2>
  );
};
