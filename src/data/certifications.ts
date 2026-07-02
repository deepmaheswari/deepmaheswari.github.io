export interface Certification {
  name: string
  type: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'Cloud Practitioner', type: 'Certificate', issuer: 'AWS' },
  { name: 'Data Engineering', type: 'Badge', issuer: 'AWS' },
  { name: 'The Tech Whisperer Award', type: 'Award', issuer: 'Aramark' },
]
