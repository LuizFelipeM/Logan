export interface IProfessorEditDto {
  id: number
  first_name: string
  last_name: string
  profile: number
  subject: {
    class: number
    discipline: number
    semester: number
    class_time: number
  }
}
