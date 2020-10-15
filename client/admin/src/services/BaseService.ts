import axios, { AxiosInstance } from 'axios'

export default abstract class BaseService<T> {
  protected api: AxiosInstance

  constructor(path: string) {
    this.api = axios.create({
      baseURL: `http://localhost:8080/${path}`
    })
  }

  getAll = async (): Promise<T[]> => (await this.api.get('/getAll')).data

  getById = async (id: number): Promise<T> => (await this.api.get('/getById', { params: id })).data

  create = (data: T): Promise<void> => this.api.post('/', data)

  delete = (id: number): Promise<void> => this.api.delete('/', { params: id })
}
