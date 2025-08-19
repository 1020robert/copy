import { css } from '@emotion/react';
import { PageHeader } from '../components/contents/section';

const MastheadPage = (): JSX.Element => {
  return (
    <div
      css={css`
        text-align: center;
        padding: 48px 32px;
      `}
    >
      <PageHeader title="Masthead" />
      <div
        css={css`
          color: #666;
          font-style: italic;
          line-height: 1.6;

          a {
            text-decoration: none;
            color: inherit;
          }

          b {
            color: black;
          }

          b,
          i {
            font-style: normal;
          }
        `}
      >
        <a href="/profile/sterlinghoyte">
          <b>S</b>terling <b>E</b>. <b>H</b>oyte ’26, <i>President</i>
        </a>
        <br />
        <a href="/profile/levy">
          <b>C</b>harlotte <b>Y</b>. <b>L</b>evy ’26, <i>Ibis</i>
        </a>
        <br />
        <a href="/profile/cadenheisercerrato">
          <b>C</b>aden <b>L</b>. <b>H</b>eiser-<b>C</b>errato ’26,{' '}
          <i>Narthex</i>
        </a>
        <br />
        <b>B</b>renton <b>A</b>. <b>J</b>affe ’26, <i>Treasurer</i>
        <br />
        <a href="/profile/gilizaid">
          <b>G</b>il’i <b>D</b>. <b>A</b>. <b>Z</b>aid ’26, <i>Blot</i>
        </a>
        <br />
        <b>M</b>. <b>I</b>. <b>C</b>arpenter ’26
        <br />
        <a href="/profile/inesim">
          <b>I</b>. <b>K</b>. <b>I</b>m ’26
        </a>
        <br />
        <b>D</b>. <b>C</b>. <b>C</b>. <b>P</b>igott ’25
        <br />
        <b>R</b>. <b>S</b>. <b>A</b>ndrews ’25
        <br />
        <a href="/profile/mattsakiyama">
          <b>M</b>. <b>S</b>. <b>S</b>akiyama ’25- '26
        </a>
        <br />
        <b>E</b>. <b>J</b>. <b>D</b>roga ’26
        <br />
        <b>O</b>. <b>H</b>. <b>P</b>ark ’27
        <br />
        <b>G</b>. <b>N</b>avarro <b>M</b>oynihan ’27
        <br />
        <b>J</b>. <b>G</b>. <b>C</b>urrie ’26
        <br />
        <b>R</b>. <b>B</b>asidj ’26
        <br />
        <b>K</b>. <b>M</b>. <b>B</b>enson ’26
        <br />
        <b>A</b>. <b>G</b>. <b>D</b>. <b>P</b>ratt ’26
        <br />
        <b>A</b>. <b>W</b>. <b>E</b>ckford ’27
        <br />
        <b>R</b>. <b>C</b>. <b>Q</b>uesada <b>P</b>agoada ’27
        <br />
        <b>J</b>. <b>G</b>. <b>L</b>. <b>H</b>a ’25-’26
        <br />
        <b>M</b>. <b>E</b>. <b>B</b>lanchard ’26
        <br />
        <b>J</b>. <b>A</b>. <b>J</b>ohnson ’26
        <br />
        <b>B</b>. <b>D</b>. <b>L</b>angman ’26
        <br />
        <b>M</b>. <b>F</b>. <b>E</b>. <b>C</b>hapman ’27
        <br />
        <b>A</b>. <b>S</b>. <b>S</b>chmiegelow ’27
        <br />
        <b>G</b>. <b>C</b>. <b>L</b>. <b>S</b>izemore ’27
        <br />
        <b>G</b>. <b>M</b>. <b>B</b>rady ’28
        <br />
        <b>J</b>. <b>D</b>. <b>F</b>eldman ’28
        <br />
        <b>G</b>. <b>C</b>. <b>L</b>ewis ’28
        <br />
        <b>R</b>. <b>J</b>. <b>M</b>. <b>L</b>ichten ’28
        <br />
        <b>A</b>. <b>J</b>. <b>P</b>eter ’28
        <br />
        <b>N</b>. <b>U</b>. <b>R</b>ojas-<b>C</b>essa ’28
        <br />
        <br />
        <a href="/profile/kainelson">
          <b>D</b>. <b>K</b>ai <b>N</b>elson ’27, <i>Sanctum</i>
        </a>
        <br />
        <b>L</b>auren <b>N</b>. <b>W</b>ood ’27, <i>Sanctum</i>
        <br />
        <b>I</b>saac <b>I</b>. <b>L</b>und ’27, <i>Hautbois</i>
        <br />
        <b>J</b>ake <b>R</b>. <b>C</b>ahn ’27, <i>Hautbois</i>
        <br />
        <b>T</b>yler <b>J</b>. <b>H</b>. <b>O</b>ry ’26, <i>Sackbut</i>
        <br />
        <b>K</b>aia <b>J</b>. <b>L</b>i ’26, <i>Sackbut</i>
        <br />
        <b>H</b>amza <b>T</b>. <b>M</b>asoud ’26, <i>Nave</i>
        <br />
        <b>D</b>ylan <b>R</b>. <b>R</b>agas ’26, <i>Scribe</i>
        <br />
        <br />
        <b>BUSINESS BOARD</b>
        <br />
        <b>I</b>sabella <b>S</b>. <b>M</b>andis ’26, <i>Business Manager</i>
        <br />
        <b>A</b>llyson <b>X</b>u ’28, <i>Advertising Manager</i>
        <br />
        <b>J</b>. <b>N</b>athaniel <b>B</b>erkman ’27,{' '}
        <i>Circulation Manager</i>
        <br />
        <br />
        <b>M</b>. <b>L</b>. <b>M</b>enin ’26
        <br />
        <b>N</b>. <b>W</b>. <b>L</b>ee ’26
        <br />
        <b>A</b>. <b>F</b>. <b>M</b>oore ’26
        <br />
        <b>T</b>. <b>R</b>. <b>T</b>aubman ’26
        <br />
        <b>O</b>. <b>D</b>. <b>W</b>iese ’25- '26
        <br />
        <b>L</b>. <b>S</b>. <b>C</b>offey ’27
        <br />
        <b>A</b>. <b>C</b>. <b>G</b>iuliani ’27
        <br />
        <b>L</b>. <b>G</b>. <b>G</b>eorgeaux-<b>H</b>ealy ’25 -'26
        <br />
        <b>S</b>. <b>S</b>atish ’26
        <br />
        <b>R</b>. <b>W</b>. <b>J</b>ohnson <b>V</b> ’28
        <br />
        <b>A</b>. <b>M</b>. <b>V</b>an-<b>P</b>oecke ’28
        <br />
        <br />
        <b>E</b>lmer <b>W</b>. <b>G</b>reen, 1897-1977, <i>Grand Curator</i>
        <br />
        <b>C</b>arol, <i>Annitas</i>
        <br />
      </div>
    </div>
  );
};

export default MastheadPage;
