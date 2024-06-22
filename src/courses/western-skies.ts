import { CourseType } from './Course'

const tees = ['Blue', 'White', 'Silver/White', 'Red']

export const westernSkies: CourseType = {
  name: 'Western Skies',
  tees,
  courseHandicaps: [
    {
      tees: [tees[0], tees[1]],
      handicap: [5, 15, 7, 3, 13, 17, 9, 1, 11, 10, 6, 2, 8, 14, 18, 12, 4, 16],
      par: [5, 3, 5, 3, 4, 4, 3, 4, 4, 4, 4, 3, 5, 4, 4, 5, 4, 4],
    },
    {
      tees: [tees[2], tees[3]],
      handicap: [3, 17, 1, 15, 5, 11, 13, 7, 9, 14, 12, 18, 4, 6, 10, 2, 8, 16],
      par: [5, 3, 5, 3, 4, 4, 3, 4, 4, 4, 4, 3, 5, 4, 4, 5, 4, 4],
    },
  ]
}