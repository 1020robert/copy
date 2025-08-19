import type { AppProps } from 'next/app';
import 'modern-normalize';
import '../styles/global.css';
import { useRouter } from 'next/router';
import NavBar, { mobileNavCutoff } from '../components/NavBar';
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import NavPage from '../components/NavPage';
import Head from 'next/head';

const InnerApp = ({
  Component,
  pageProps,
  onClickShowNav,
}: AppProps & {
  onClickShowNav?: () => void;
}): JSX.Element => {
  const router = useRouter();
  const innerDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      innerDivRef.current?.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  } else {
    return (
      <div
        css={css`
          display: flex;
          background: black;
          height: 100svh;

          @media screen and (max-width: ${mobileNavCutoff}px) {
            flex-direction: column;
          }
        `}
      >
        <NavBar onClickShowNav={onClickShowNav} />
        <div
          ref={innerDivRef}
          css={css`
            background: white;
            flex: 1;
            overflow: scroll;
            height: 100svh;
            border-radius: 40px 0px 0px 0px;

            @media screen and (max-width: ${mobileNavCutoff}px) {
              border-radius: 0px;
            }
          `}
        >
          <Component {...pageProps} />
        </div>
      </div>
    );
  }
};

const App = (props: AppProps): JSX.Element => {
  const [showNav, setShowNav] = useState(false);

  if (props.router.pathname.startsWith('/archive-embed/')) {
    return <props.Component {...props.pageProps} />;
  }

  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;
        height: 100svh;
        width: 100vw;
      `}
    >
      <Head>
        <title>The Harvard Lampoon</title>
        <link rel="icon" href="/favicon.png" />
        <script src="/vendor/dflip/js/libs/jquery.min.js"></script>
      </Head>
      <InnerApp {...props} onClickShowNav={() => setShowNav(true)} />
      <NavPage
        theme="black"
        onHideNav={() => setShowNav(false)}
        css={css`
          ${props.router.pathname === '/' || showNav
            ? css`
                transform: none;
                opacity: 1;
              `
            : css`
                transform: translateX(100vw);
                opacity: 0;
              `};
          transition: transform 0.5s, opacity 0.5s;
        `}
      />
    </div>
  );
};

export default App;
