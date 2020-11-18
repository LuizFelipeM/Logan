export interface IProfessorEditDto {
  id: number
  first_name: string
  last_name: string
  profile: number
  subjects: ISubjectEdit[]
}

interface ISubjectEdit {
  class: number
  discipline: number
  semester: number
  class_time: number
}
