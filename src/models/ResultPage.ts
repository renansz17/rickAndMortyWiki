import { Character } from './Character'
import { Location } from './Location'
export interface ResultPage {
  info?: {
    count?: number
    pages?: number
    next?: string
    prev?: any
  }
  results?: Character[]
}
export interface ResultPageLocation {
  info?: {
    count?: number
    pages?: number
    next?: string
    prev?: any
  }
  results?: Location[]
}

export interface ResultPageEpisode {
  info?: {
    count?: number
    pages?: number
    next?: string
    prev?: any
  }
  results?: Location[]
}
