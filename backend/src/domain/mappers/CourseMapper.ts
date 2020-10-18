import { ISpecificCourseDto } from '../interfaces/contracts/ISpecificCourseDto'

export function toSpecifCourseDto (classId: number, studentQtd: number, semesterId: number, freq: number, avg:number, profName :string): ISpecificCourseDto {
  return {
    class: classId,
    students: studentQtd,
    semester: semesterId,
    frequency: freq,
    avgNotes: avg,
    professor: profName
  }
}

// {
//     class: 1,
//     students: 12,
//     semester: 4,
//     frequency: 0.8,
//     avgNotes: 10,
//     professor: "Deus"
//   }
