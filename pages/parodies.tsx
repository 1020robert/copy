import { css } from '@emotion/react';
import NavBar, { mobileNavCutoff } from '../components/NavBar';
import Wordmark from '../components/icons/wordmark';
import {
  ReadGrid,
  PublicationCell,
  SectionHeader,
  PieceCell,
  PageHeader,
} from '../components/contents/section';
import { Publication } from '../lib/publications';
import { Piece } from '../lib/pieces';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import {
  getAllParodies,
  getAllPublications,
  getLatestParody,
  getLatestPublications,
} from '../server-lib/publications';
import { getLatestPieces, getRandomPieces } from '../server-lib/pieces';

interface ReadPageProps {
  latestParodies: Publication[];
}

const Read = (props: ReadPageProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 48px 32px;
      `}
    >
      <PageHeader title="Parodies" />
      <ReadGrid>
        {props.latestParodies.map((publication) => (
          <PublicationCell publication={publication} key={publication.id} />
        ))}
      </ReadGrid>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ReadPageProps>> {
  const [a] = await Promise.all([getAllParodies()]);

  return {
    props: {
      latestParodies: a,
    },
  };
}

export default Read;
