import { Profile } from './profiles';

export interface Publication {
  id: string;
  title: string;
  assetUrl: string;

  type: 'publication' | 'parody';
  openUrl?: string;

  subtitle?: string;

  description?: string;
  descriptionPreview?: string;

  creationTimestamp: string;
  issueEditorId?: string;
  artEditorId?: string;
  layoutEditorId?: string;

  // Joined fields

  issueEditor?: Profile;
  artEditor?: Profile;
  layoutEditor?: Profile;
}

export const testPublications: Publication[] = [
  {
    id: 'lig',
    title: 'Life is Good #',
    assetUrl: '/assets/test/cover-art-1.jpg',
    subtitle: 'Fall 2024',
    descriptionPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nulla ut nibh tristique cursus vitae at lacus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nulla ut nibh tristique cursus vitae at lacus',
    creationTimestamp: '',
    type: 'publication',
  },
  {
    id: 'rc',
    title: 'Cosmopolitan',
    assetUrl: '/assets/test/cover-art-2.png',
    subtitle: 'Winter 2024',
    descriptionPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nulla ut nibh tristique cursus vitae at lacus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nulla ut nibh tristique cursus vitae at lacus',
    creationTimestamp: '',
    type: 'parody',
  },
];
