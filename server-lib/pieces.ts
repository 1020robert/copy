import _ from 'lodash';
import { Piece, testPieces } from '../lib/pieces';
import supabaseClient from './supabase';

export const piecesWithProfilesQuery = `
  *,
  author:Profiles!Pieces_authorId_fkey(*),
  artist:Profiles!Pieces_artistId_fkey(*),
  publication:Publications!Pieces_publicationId_fkey(*)
`;

export async function getPiece(id: string): Promise<Piece | undefined> {
  if (process.env.TEST) {
    return testPieces.find((piece) => piece.id === id);
  }

  return supabaseClient
    .from('Pieces')
    .select(piecesWithProfilesQuery)
    .eq('id', id)
    .single()
    .then((response) => response.data as Piece | undefined);
}

export async function getLatestPieces(): Promise<Piece[]> {
  if (process.env.TEST) {
    return testPieces;
  }

  return supabaseClient
    .from('Pieces')
    .select(piecesWithProfilesQuery)
    .order('creationTimestamp', { ascending: false })
    .limit(30)
    .then((response) => _.sampleSize(response.data, 12) as Piece[]);
}

export async function getRandomPieces(): Promise<Piece[]> {
  if (process.env.TEST) {
    return testPieces;
  }

  return supabaseClient
    .from('Pieces')
    .select(piecesWithProfilesQuery)
    .then((response) => _.sampleSize(response.data, 12) as Piece[]);
}
