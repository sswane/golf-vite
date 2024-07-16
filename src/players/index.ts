/* Future implementation ideas:
  - Look up player's course handicap from GHIN
*/

import { westernSkies } from '../courses/western-skies'

export type PlayerType = {
  name: string
  course: string
  tees: string
  courseHandicap: number
  grossScores: number[]
  netScores: number[]
  team?: number
}

const steph: PlayerType = {
  name: 'Stephanie',
  course: 'Western Skies',
  tees: westernSkies.tees[3],
  courseHandicap: 3,
  grossScores: [],
  netScores: [],
}

const becca: PlayerType = {
  name: 'Becca',
  course: 'Western Skies',
  tees: westernSkies.tees[3],
  courseHandicap: 21,
  grossScores: [],
  netScores: [],
}

const rob: PlayerType = {
  name: 'Rob',
  course: 'Western Skies',
  tees: westernSkies.tees[0],
  courseHandicap: 0,
  grossScores: [],
  netScores: [],
}

const arefeen: PlayerType = {
  name: 'Arefeen',
  course: 'Western Skies',
  tees: westernSkies.tees[0],
  courseHandicap: 12,
  grossScores: [],
  netScores: [],
}

export const players = [ rob, steph, arefeen, becca ]
