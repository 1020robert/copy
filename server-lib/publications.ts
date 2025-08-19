import { Piece, testPieces } from '../lib/pieces';
import { Publication, testPublications } from '../lib/publications';
import { piecesWithProfilesQuery } from './pieces';
import supabaseClient from './supabase';

export const publicationWithProfilesQuery = `
  *,
  artEditor:Profiles!Publications_artEditorId_fkey(*),
  issueEditor:Profiles!Publications_issueEditorId_fkey(*),
  layoutEditor:Profiles!Publications_layoutEditorId_fkey(*)
`;

export async function getLatestPublications(): Promise<Publication[]> {
  if (process.env.TEST) {
    return testPublications;
  }

  return supabaseClient
    .from('Publications')
    .select(publicationWithProfilesQuery)
    .eq('type', 'publication')
    .order('creationTimestamp', { ascending: false })
    .limit(2)
    .then((response) => {
      return response.data as Publication[];
    });
}

export async function getLatestParody(): Promise<Publication> {
  if (process.env.TEST) {
    return testPublications[0];
  }

  return supabaseClient
    .from('Publications')
    .select(publicationWithProfilesQuery)
    .eq('type', 'parody')
    .order('creationTimestamp', { ascending: false })
    .limit(1)
    .then((response) => {
      return response.data?.[0] as Publication;
    });
}

export async function getAllParodies(): Promise<Publication[]> {
  if (process.env.TEST) {
    return testPublications;
  }

  return supabaseClient
    .from('Publications')
    .select(publicationWithProfilesQuery)
    .eq('type', 'parody')
    .order('creationTimestamp', { ascending: false })
    .then((response) => {
      return response.data as Publication[];
    });
}

export async function getAllPublications(): Promise<Publication[]> {
  if (process.env.TEST) {
    return testPublications;
  }

  return supabaseClient
    .from('Publications')
    .select(publicationWithProfilesQuery)
    .eq('type', 'publication')
    .order('creationTimestamp', { ascending: false })
    .then((response) => {
      return response.data as Publication[];
    });
}

export async function getPublication(id: string) {
  if (process.env.TEST) {
    return testPublications.find((publication) => publication.id === id);
  }

  return supabaseClient
    .from('Publications')
    .select(publicationWithProfilesQuery)
    .eq('id', id)
    .single()
    .then((response) => {
      return response.data as Publication | undefined;
    });
}

export async function getPublicationPieces(id: string) {
  if (process.env.TEST) {
    return testPieces.filter((piece) => piece.publicationId === id);
  }

  return supabaseClient
    .from('Pieces')
    .select(piecesWithProfilesQuery)
    .eq('publicationId', id)
    .then((response) => response.data as Piece[]);
}
