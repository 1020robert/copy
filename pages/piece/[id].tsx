import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Piece } from '../../lib/pieces';
import { PageHeader } from '../../components/contents/section';
import { css } from '@emotion/react';
import Link from 'next/link';
import { getPiece } from '../../server-lib/pieces';

interface PiecePageProps {
  piece: Piece;
}

const PiecePage = (props: PiecePageProps): JSX.Element => {
  return (
    <div>
      <img
        src={
          props.piece.assetType === 'wide' ? undefined : props.piece.assetUrl
        }
        css={css`
          ${props.piece.assetType === 'wide' ? 'height: 140px;' : ''}
          width: 100%;
          ${props.piece.assetType === 'wide'
            ? `background: center/cover url(${props.piece.assetUrl});`
            : ''}
          box-shadow: inset 0px -1px 20px 0px rgba(0, 0, 0, 0.1);
        `}
      />
      <div
        css={css`
          padding: 36px 0px;
          width: 80%;
          max-width: 500px;
          margin: 0 auto;
          font-size: 18px;
        `}
      >
        <div
          css={css`
            text-align: center;
          `}
        >
          <PageHeader
            title={props.piece.title}
            css={css`
              margin: 0px 0px 4px;
            `}
          />
          {props.piece.publication ? (
            <p
              css={css`
                color: #999;
                margin: 0px 0px 20px;
              `}
            >
              <i>
                As seen in:{' '}
                <Link
                  href={`/publication/${props.piece.publicationId}`}
                  css={css`
                    color: inherit;
                  `}
                >
                  {props.piece.publication?.title}
                </Link>
              </i>
            </p>
          ) : null}
        </div>
        <div
          css={css`
            line-height: 1.4em;
          `}
          dangerouslySetInnerHTML={{ __html: props.piece.body }}
        />
        {props.piece.author ? (
          <p>
            <Link
              href={`/profile/${props.piece.authorId}`}
              css={css`
                color: inherit;
                text-decoration: none;
              `}
            >
              {props.piece.author?.displayName}
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
};

// Fetch piece from server
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PiecePageProps>> {
  if (typeof context.params?.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const piece = await getPiece(context.params?.id);

  if (!piece) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      piece: piece,
    },
  };
}

export default PiecePage;
