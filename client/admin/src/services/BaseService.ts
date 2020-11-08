import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { IBase } from '../interfaces/models/IBase'

enum BaseServiceEndpointEnum {
  getAll = '/getAll',
  getById = '/getById',
  create = '/',
  delete = '/'
}

export default abstract class BaseService<T extends IBase> {
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

  getAll = (): Promise<T[]> => this.GET(BaseServiceEndpointEnum.getAll)

  getById = (id: number): Promise<T> => this.GET(BaseServiceEndpointEnum.getById, { params: id })

  create = (data: Omit<T, 'id'>): Promise<void> => this.POST(BaseServiceEndpointEnum.create, data)

  delete = (id: number): Promise<void> => this.DELETE(BaseServiceEndpointEnum.delete, { params: id })
}
