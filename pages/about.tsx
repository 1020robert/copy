import { css } from '@emotion/react';
import { PageHeader } from '../components/contents/section';

const AboutPage = (): JSX.Element => {
  return (
    <div
      css={css`
        text-align: center;
        padding: 48px 32px;
      `}
    >
      <PageHeader title="About" />
      <div
        css={css`
          max-width: 500px;
          margin: 0 auto;
          text-align: left;
          width: 80%;
          line-height: 1.4em;
        `}
      >
        Founded in 1876 by seven Harvard undergraduates, The Harvard Lampoon is
        one of the world’s longest-running continuously-published humor
        magazines. The Lampoon publishes five issues annually and occasionally
        parodies other magazines (<i>People</i>, <i>Time</i>,{' '}
        <i>Mademoiselle</i>, <i>Playboy</i>, <i>National Geographic</i>, and
        many more) or the day’s popular literature (<i>Bored of the Rings</i>,{' '}
        <i>The Hunger Pains</i>, <i>Nightlight</i>, <i>Lame of Thrones</i>).
        Many of our alumni have gone on to great fortune, and many others have
        not.
      </div>
    </div>
  );
};

export default AboutPage;
