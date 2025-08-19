export interface Profile {
  id: string;

  avatarUrl?: string;
  displayName: string;
  fullName?: string;
  subtitle?: string;
}

export const testProfiles: Profile[] = [
  {
    id: 'lig',
    displayName: 'LIG',
  },
];
