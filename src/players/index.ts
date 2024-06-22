/* Future implementation ideas:
  - Look up player's course handicap from GHIN
*/

import { westernSkies } from '../courses/western-skies'
import { PlayerType } from './Player'

const steph: PlayerType = {
  name: 'Stephanie Swaney',
  course: 'Western Skies',
  tees: westernSkies.tees[3],
  courseHandicap: 3,
  grossScores: [],
  netScores: [],
}

const becca: PlayerType = {
  name: 'Becca Miller',
  course: 'Western Skies',
  tees: westernSkies.tees[3],
  courseHandicap: 21,
  grossScores: [],
  netScores: [],
}

const rob: PlayerType = {
  name: 'Rob Miller',
  course: 'Western Skies',
  tees: westernSkies.tees[0],
  courseHandicap: 0,
  grossScores: [],
  netScores: [],
}

const arefeen: PlayerType = {
  name: 'Arefeen Ahmed',
  course: 'Western Skies',
  tees: westernSkies.tees[0],
  courseHandicap: 12,
  grossScores: [],
  netScores: [],
}

export const players = [ arefeen, becca, rob, steph ]
