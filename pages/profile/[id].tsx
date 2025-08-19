import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Profile } from '../../lib/profiles';
import { Piece } from '../../lib/pieces';
import { css } from '@emotion/react';
import {
  PageHeader,
  PieceCell,
  ReadGrid,
  SectionDividerLine,
} from '../../components/contents/section';
import { getProfile, getProfilePieces } from '../../server-lib/profiles';

interface ProfilePageProps {
  profile: Profile;
  pieces: Piece[];
}

const ProfilePage = (props: ProfilePageProps) => {
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
        <div
          css={css`
            width: 80px;
            height: 80px;
            margin: 0px 12px 0px 0px;
            border-radius: 40px;
            background: ${props.profile.avatarUrl
              ? `center/cover url(${props.profile.avatarUrl})`
              : 'linear-gradient(#00000011, #00000011)'};
          `}
        />
        <div>
          <PageHeader
            title={props.profile.fullName ?? props.profile.displayName}
            css={css`
              margin-bottom: 0px;
            `}
          />
          {props.profile.subtitle ? (
            <p
              css={css`
                margin: 4px 0px 0px;
              `}
            >
              {props.profile.subtitle}
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

export default ProfilePage;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ProfilePageProps>> {
  if (typeof context.params?.id !== 'string') {
    return { notFound: true };
  }

  const [profile, pieces] = await Promise.all([
    getProfile(context.params.id),
    getProfilePieces(context.params.id),
  ]);

  if (!profile) {
    return { notFound: true };
  }

  return {
    props: {
      profile: profile,
      pieces: pieces,
    },
  };
}
