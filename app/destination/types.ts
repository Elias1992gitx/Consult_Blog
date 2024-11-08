export interface StudyCard {
  title: string
  location: string
  image: string
  country: string
  continent: string
  universityName: string
  category: string
  programType: string
  duration: string
  startDate: string
  region: string
  description: string
  dates?: string
}

export interface FilterState {
  continent: string
  country: string
} 