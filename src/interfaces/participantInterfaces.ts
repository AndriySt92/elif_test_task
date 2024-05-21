export interface Participant {
  _id: string
  fullName: string
  email: string
}
export type source = "social media" | "friends" | "found myself"

export interface RegisterData {
  fullName: string
  email: string
  birth_date: string
  source: source
}

