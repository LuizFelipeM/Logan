import Rules from './Rules'

export default interface Perfil {
  id: number,
  name: string,
  rules: Rules[],
}
