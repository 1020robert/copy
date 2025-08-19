import { css } from '@emotion/react';
import NavBar, { mobileNavCutoff } from '../components/NavBar';
import Wordmark from '../components/icons/wordmark';
import {
  ReadGrid,
  PublicationCell,
  SectionHeader,
  PieceCell,
} from '../components/contents/section';
import { Publication } from '../lib/publications';
import { Piece } from '../lib/pieces';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import {
  getAllPublications,
  getLatestParody,
  getLatestPublications,
} from '../server-lib/publications';
import { getLatestPieces, getRandomPieces } from '../server-lib/pieces';

interface ReadPageProps {
  whatsNewPublications: Publication[];
  latestPieces: Piece[];
  deepCutsPieces: Piece[];
  latestParody: Publication;
}

const Read = (props: ReadPageProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 48px 32px;
      `}
    >
      <Wordmark
        css={css`
          color: black;
          width: 320px;
          margin-bottom: 2px;
          display: block;

          @media screen and (max-width: ${mobileNavCutoff}px) {
            display: none;
          }
        `}
        mode="fill"
      />

      <SectionHeader
        title="What’s New"
        css={css`
          @media screen and (max-width: ${mobileNavCutoff}px) {
            margin-top: 8px;
          }
        `}
      />
      <ReadGrid>
        {props.whatsNewPublications.map((publication) => (
          <PublicationCell publication={publication} key={publication.id} />
        ))}
      </ReadGrid>

      <SectionHeader title="Check it Out" />
      <PublicationCell publication={props.latestParody} css={css``} />

      <SectionHeader title={'The Latest'} />
      <ReadGrid>
        {props.latestPieces.map((piece) => (
          <PieceCell piece={piece} key={piece.id} />
        ))}
      </ReadGrid>

      <SectionHeader title="Deep Cuts" />
      <ReadGrid>
        {props.deepCutsPieces.map((piece) => (
          <PieceCell piece={piece} key={piece.id} />
        ))}
      </ReadGrid>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ReadPageProps>> {
  const [a, b, c, d] = await Promise.all([
    getLatestPublications(),
    getLatestPieces(),
    getRandomPieces(),
    getLatestParody(),
  ]);

  return {
    props: {
      whatsNewPublications: a,
      latestPieces: b,
      deepCutsPieces: c,
      latestParody: d,
    },
  };
}

export default Read;
