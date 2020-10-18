import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

enum BaseEndpointsEnum {
  getAll = '/getAll',
  getById = '/getById',
  create = '/',
  delete = '/'
}

export default abstract class BaseService<T> {
  protected api: AxiosInstance

  constructor(path: string) {
    this.api = axios.create({
      baseURL: `http://localhost:8080/${path}`
    })
  }

  protected GET = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => (await this.api.get(url, config)).data
  protected PUT = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.put(url, body, config)).data
  protected POST = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.post(url, body, config)).data
  protected PATCH = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.patch(url, body, config)).data
  protected DELETE = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => (await this.api.delete(url, config)).data

  getAll = (): Promise<T[]> => this.GET(BaseEndpointsEnum.getAll)
  getById = (id: number): Promise<T> => this.GET(BaseEndpointsEnum.getById, { params: id })
  create = (data: T): Promise<void> => this.POST(BaseEndpointsEnum.create, data)
  delete = (id: number): Promise<void> => this.DELETE(BaseEndpointsEnum.delete, { params: id })
}
