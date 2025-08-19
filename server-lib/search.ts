import { Piece } from '../lib/pieces';
import { Publication } from '../lib/publications';
import { piecesWithProfilesQuery } from './pieces';
import { publicationWithProfilesQuery } from './publications';
import supabaseClient from './supabase';

export type SearchResult =
  | { type: 'publication'; data: Publication }
  | { type: 'piece'; data: Piece };

export async function search(term: string) {
  const [a, b] = await Promise.all([
    supabaseClient
      .from('Publications')
      .select(publicationWithProfilesQuery)
      .textSearch('title', term)
      .limit(5)
      .then((response) => {
        return response.data as Publication[];
      }),
    supabaseClient
      .from('Pieces')
      .select(piecesWithProfilesQuery)
      .textSearch('title', term)
      .limit(5)
      .then((response) => {
        return response.data as Piece[];
      }),
  ]);

  return ([] as SearchResult[])
    .concat(a.map((i) => ({ type: 'publication', data: i } as SearchResult)))
    .concat(b.map((i) => ({ type: 'piece', data: i } as SearchResult)));
}
