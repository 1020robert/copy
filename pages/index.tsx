import { css, keyframes } from '@emotion/react';
import Door from '../components/Door';
import NavContents from '../components/NavPage';
import {
  AnimatedWordmark,
  AnimatedWordmarkOverlay,
} from '../components/icons/wordmark';
import NavPage from '../components/NavPage';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';

const disablePointerEventsKeyframes = keyframes`
  0% {
    pointer-events: default;
  }

  99% {
    pointer-events: default;
  }

  100% {
    pointer-events: none;
  }
`;

const IndexPage = (): JSX.Element => {
  return (
    <div
      css={css`
        position: relative;
        z-index: 2;
        height: 100svh;
        width: 100vw;

        animation: ${disablePointerEventsKeyframes} 1s ease-out both;
        animation-delay: 6s;
      `}
    >
      <AnimatedWordmarkOverlay />
    </div>
  );
};

export async function getServerSideProps(props: GetServerSidePropsContext) {
  if (props.req.cookies['load-read'] === 'true') {
    return {
      redirect: {
        destination: '/read',
        permanent: false,
      },
    };
  }

  props.res.setHeader('Set-Cookie', 'load-read=true; Max-Age=31536000');

  return {
    props: {},
  };
}

export default IndexPage;
