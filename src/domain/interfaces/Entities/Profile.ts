import Rules from './Rules'

export default interface Profile {
  id: number,
  name: string,
  rules: Rules[],
}
