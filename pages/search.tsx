import { css } from '@emotion/react';
import {
  PageHeader,
  PieceCell,
  PublicationCell,
  ReadGrid,
} from '../components/contents/section';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getAllPublications } from '../server-lib/publications';
import { Publication } from '../lib/publications';
import { useState } from 'react';
import { SearchResult } from '../server-lib/search';

interface SearchPageProps {
  allPublications: Publication[];
}

const SearchPage = (props: SearchPageProps): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<
    SearchResult[] | undefined
  >();

  return (
    <div
      css={css`
        padding: 48px 32px;
      `}
    >
      <PageHeader title="Search" />
      <div
        css={css`
          display: flex;
          align-items: stretch;
          margin: -4px 0px 32px;
        `}
      >
        <input
          css={css`
            background: #eee;
            padding: 8px;
            border-radius: 0px;
            border: none;
            flex: 1;
            margin-right: 8px;
          `}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for pieces or publications"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              performSearch(search);
            }
          }}
        />
        <button
          css={css`
            background: black;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 0px;
            padding: 0px 8px;
            cursor: pointer;
          `}
          onClick={() => {
            performSearch(search);
          }}
        >
          Submit
        </button>
      </div>
      <ReadGrid>
        {searchResults ? (
          searchResults.length > 0 ? (
            searchResults.map((result) =>
              result.type === 'piece' ? (
                <PieceCell piece={result.data} key={result.data.id} />
              ) : result.type === 'publication' ? (
                <PublicationCell
                  publication={result.data}
                  key={result.data.id}
                />
              ) : null
            )
          ) : (
            <p
              css={css`
                margin: 0px;
              `}
            >
              No results.
            </p>
          )
        ) : (
          props.allPublications.map((publication) => (
            <PublicationCell publication={publication} key={publication.id} />
          ))
        )}
      </ReadGrid>
    </div>
  );

  function performSearch(newSearch: string) {
    fetch(`/api/search?search=${newSearch}`)
      .then((result) => result.json())
      .then((result) => setSearchResults(result?.results ?? []));
  }
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<SearchPageProps>> {
  const allPublications = await getAllPublications();

  return {
    props: {
      allPublications,
    },
  };
}
export default SearchPage;
