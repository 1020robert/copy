import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Publication } from '../../lib/publications';
import { Piece } from '../../lib/pieces';
import { css } from '@emotion/react';
import {
  PageHeader,
  PieceCell,
  ReadGrid,
  SectionDividerLine,
} from '../../components/contents/section';
import {
  getPublication,
  getPublicationPieces,
} from '../../server-lib/publications';

interface PublicationPageProps {
  publication: Publication;
  pieces: Piece[];
}

const PublicationPage = (props: PublicationPageProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 48px 32px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <img
          css={css`
            width: 80px;
            margin: 0px 12px 0px 0px;
            background: #eee;
          `}
          src={props.publication.assetUrl}
        />
        <div>
          <PageHeader
            title={props.publication.title}
            css={css`
              margin-bottom: 0px;
            `}
          />
          {props.publication.subtitle ? (
            <p
              css={css`
                margin: 4px 0px 0px;
              `}
            >
              {props.publication.subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <SectionDividerLine
        light={true}
        css={css`
          margin: 16px 0px 32px;
        `}
      />
      <ReadGrid>
        {props.pieces.map((piece) => (
          <PieceCell piece={piece} key={piece.id} />
        ))}
      </ReadGrid>
    </div>
  );
};

export default PublicationPage;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PublicationPageProps>> {
  if (typeof context.params?.id !== 'string') {
    return { notFound: true };
  }

  const [publication, pieces] = await Promise.all([
    getPublication(context.params.id),
    getPublicationPieces(context.params.id),
  ]);

  if (!publication) {
    return { notFound: true };
  }

  return {
    props: {
      publication: publication,
      pieces: pieces,
    },
  };
}
