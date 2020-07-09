import Perfil from './Perfil'

export default interface User {
  id: number,
  name: string,
  gender: string,
  birthDate: Date,
  perfil: Perfil,
}
