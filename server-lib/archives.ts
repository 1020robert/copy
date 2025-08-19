import { ArchivePublication } from '../lib/archives';
import supabaseClient from './supabase';

export async function getArchivePublications(): Promise<ArchivePublication[]> {
  return supabaseClient
    .from('ArchivePublications')
    .select('*')
    .order('publicationTimestamp', { ascending: true })
    .then(
      (response) =>
        response.data!.filter(
          (item) => item.coverAssetUrl
        ) as ArchivePublication[]
    );
}

export async function getArchivePublicationWithId(
  id: string
): Promise<ArchivePublication | undefined> {
  return supabaseClient
    .from('ArchivePublications')
    .select('*')
    .eq('id', id)
    .single()
    .then((response) => response.data as ArchivePublication | undefined);
}
