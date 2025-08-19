import _ from 'lodash';
import { Piece, testPieces } from '../lib/pieces';
import { Profile, testProfiles } from '../lib/profiles';
import { piecesWithProfilesQuery } from './pieces';
import supabaseClient from './supabase';

export async function getProfile(id: string) {
  if (process.env.TEST) {
    return testProfiles.find((profile) => profile.id === id);
  }

  return supabaseClient
    .from('Profiles')
    .select()
    .eq('id', id)
    .single()
    .then((response) => response.data as Profile | undefined);
}

export async function getProfilePieces(id: string) {
  if (process.env.TEST) {
    return testPieces.filter((piece) => piece.authorId === id);
  }

  const [a, b] = await Promise.all([
    supabaseClient
      .from('Pieces')
      .select(piecesWithProfilesQuery)
      .eq('authorId', id)
      .then((response) => response.data as Piece[]),
    supabaseClient
      .from('Pieces')
      .select(piecesWithProfilesQuery)
      .eq('artistId', id)
      .then((response) => response.data as Piece[]),
  ]);

  return _.sortBy(a.concat(b), 'creationTimestamp', 'desc');
}
