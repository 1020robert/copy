import { css } from '@emotion/react';
import { PageHeader, ReadGrid } from '../components/contents/section';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { ArchivePublication } from '../lib/archives';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getArchivePublications } from '../server-lib/archives';

const decades = [
  '1870',
  '1880',
  '1890',
  '1900',
  '1910',
  '1920',
  '1930',
  '1940',
  '1970',
  '1980',
  '1990',
  '2000',
  '2010',
];

interface UnlockedArchivePageProps {
  lockStatus: 'unlocked';
  archivePublications: ArchivePublication[];
  archivePublicationsByDecadeString: Record<string, ArchivePublication[]>;
}

type ArchivePageProps =
  | { lockStatus: 'locked' }
  | { lockStatus: 'incorrect' }
  | UnlockedArchivePageProps;

const UnlockedArchivePage = (props: UnlockedArchivePageProps): JSX.Element => {
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null);
  const [openedFlipbook, setOpenedFlipbook] = useState<string | null>(null);

  return (
    <div
      css={css`
        background: #191919;
        color: white;
        min-height: 100svh;
        padding: 48px 32px;
      `}
    >
      <PageHeader title="Archive" />
      <ReadGrid size="small">
        {decades.map((decade) => (
          <React.Fragment key={decade}>
            <div
              onClick={() =>
                setSelectedDecade((oldDecade) =>
                  oldDecade === decade ? null : decade
                )
              }
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 12px 0px;
                cursor: pointer;
                transition: transform 0.2s ease;

                &:hover {
                  text-decoration: underline;

                  .archive-left-image {
                    transform: translateX(20px) rotateZ(-10deg) scale(0.95)
                      translateY(5px);
                  }

                  .archive-middle-image {
                    transform: scale(1.1) translateY(-5px);
                  }

                  .archive-right-image {
                    transform: translateX(-20px) rotateZ(10deg) scale(0.95)
                      translateY(5px);
                  }
                }
              `}
            >
              <div
                css={css`
                  white-space: nowrap;
                `}
              >
                <img
                  src={`/assets/archive-featured-covers/d${decade}/l.png`}
                  css={css`
                    width: 80px;
                    transform: translateX(30px) rotateZ(-10deg) scale(0.9)
                      translateY(5px);
                    transition: transform 0.2s ease;
                  `}
                  className="archive-left-image"
                />
                <img
                  src={`/assets/archive-featured-covers/d${decade}/m.png`}
                  css={css`
                    width: 80px;
                    position: relative;
                    z-index: 1;
                    transform: none;
                    transition: transform 0.2s ease;
                  `}
                  className="archive-middle-image"
                />
                <img
                  src={`/assets/archive-featured-covers/d${decade}/r.png`}
                  css={css`
                    width: 80px;
                    transform: translateX(-30px) rotateZ(10deg) scale(0.9)
                      translateY(5px);
                    transition: transform 0.2s ease;
                  `}
                  className="archive-right-image"
                />
              </div>
              <div
                css={css`
                  font-size: 24px;
                  margin-top: 12px;
                  font-family: wayfinder-cf, serif;
                  font-weight: bold;
                `}
              >
                {decade}s
              </div>
            </div>
            {selectedDecade === decade ? (
              <div
                css={css`
                  background: #161616;
                  grid-column: 1 / -1;
                  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                  width: calc(100% + 64px);
                  position: relative;
                  left: -32px;
                  padding: 32px;
                `}
              >
                {props.archivePublicationsByDecadeString[decade]?.map((pub) => (
                  <div key={pub.id} onClick={() => setOpenedFlipbook(pub.id)}>
                    <div
                      css={css`
                        padding: 16px 0px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                      `}
                    >
                      <div
                        css={css`
                          width: 74px;
                          height: 100px;
                          background: center/cover url(${pub.coverAssetUrl});
                        `}
                      />
                      <div
                        css={css`
                          margin-left: 16px;
                          font-weight: bold;
                        `}
                      >
                        {pub.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </ReadGrid>
      {openedFlipbook ? (
        <div
          css={css`
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            background: rgba(0, 0, 0, 0.2);
            padding: 64px;
            z-index: 5;
          `}
        >
          <button
            css={css`
              position: absolute;
              top: 72px;
              left: 72px;
              background: none;
              color: white;
              border: none;
              z-index: 6;
              cursor: pointer;
            `}
            onClick={() => setOpenedFlipbook(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              css={css`
                width: 24px;
              `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            src={`/archive-embed/${openedFlipbook}`}
            css={css`
              width: 100%;
              height: 100%;
              border: 0px;
              border-radius: 4px;
              background: #222222;
            `}
          />
        </div>
      ) : null}
    </div>
  );
};

const ArchivePage = (props: ArchivePageProps): JSX.Element => {
  const [passwordInput, setPasswordInput] = useState('');

  if (props.lockStatus === 'unlocked') {
    return <UnlockedArchivePage {...props} />;
  }

  return (
    <div
      css={css`
        background: #191919;
        color: white;
        min-height: 100svh;
        padding: 48px 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        css={css`
          width: 30px;
        `}
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
          clipRule="evenodd"
          css={css`
            color: white;
          `}
        />
      </svg>
      <p
        css={css`
          margin: 8px 0px 24px;
        `}
      >
        Enter password to continue.
      </p>
      <div
        css={css`
          display: flex;
          align-items: stretch;
        `}
      >
        <input
          css={css`
            background: #fff;
            padding: 8px;
            border-radius: 0px;
            border: none;
            flex: 1;
            margin-right: 8px;
          `}
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              enterPassword(passwordInput);
            }
          }}
        />
        <button
          css={css`
            background: white;
            color: black;
            font-weight: bold;
            border: none;
            border-radius: 0px;
            padding: 0px 8px;
            cursor: pointer;
          `}
          onClick={() => {
            enterPassword(passwordInput);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );

  function enterPassword(password: string) {
    Cookies.set('archive-pw', password);
    window.location.reload();
  }
};

export async function getServerSideProps(
  props: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ArchivePageProps>> {
  if (props.req.cookies['archive-pw'] === process.env.ARCHIVE_PW) {
    const archivePublications = await getArchivePublications();

    const archivePublicationsByDecadeString: Record<
      string,
      ArchivePublication[]
    > = {};

    for (const archivePub of archivePublications) {
      if (!archivePub.decadeString) {
        continue;
      }

      if (!archivePublicationsByDecadeString[archivePub.decadeString]) {
        archivePublicationsByDecadeString[archivePub.decadeString] = [
          archivePub,
        ];
      } else {
        archivePublicationsByDecadeString[archivePub.decadeString].push(
          archivePub
        );
      }
    }

    return {
      props: {
        lockStatus: 'unlocked',
        archivePublications: archivePublications,
        archivePublicationsByDecadeString: archivePublicationsByDecadeString,
      },
    };
  } else if (props.req.cookies['archive-pw']) {
    return {
      props: {
        lockStatus: 'incorrect',
      },
    };
  } else {
    return {
      props: {
        lockStatus: 'locked',
      },
    };
  }
}
export default ArchivePage;
