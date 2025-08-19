import _ from 'lodash';
import { Profile } from './profiles';
import { Publication } from './publications';

export interface Piece {
  id: string;
  title: string;

  assetUrl?: string;
  assetType: 'inline' | 'wide';

  publicationId: string;
  authorId: string;
  artistId?: string;

  body: string;
  bodyPreview?: string;

  creationTimestamp: string;

  // Joined fields

  author?: Profile;
  artist?: Profile;
  publication?: Publication;
}

export const testPieces: Piece[] = [
  {
    id: 'lig',
    title: 'Lorem Ipsum',
    assetUrl: '/assets/test/piece-art-1.jpg',
    assetType: 'inline',
    body: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    bodyPreview:
      'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    publicationId: 'lig',
    authorId: 'lig',
    creationTimestamp: '',
  },
  {
    id: 'rc',
    title: 'Orem Lipsum',
    assetUrl: '/assets/test/piece-art-2.jpg',
    assetType: 'inline',
    body: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    bodyPreview:
      'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    publicationId: 'rc',
    authorId: 'rc',
    creationTimestamp: '',
  },
];
