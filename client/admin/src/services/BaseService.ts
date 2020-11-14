import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { IBase } from '../interfaces/models/IBase'

enum BaseServiceEndpointEnum {
  getAll = '/getAll',
  getById = '/getById',
  create = '/',
  update = '/',
  delete = '/'
}

export default abstract class BaseService<T extends IBase> {
  protected api: AxiosInstance

  constructor(path: string) {
    this.api = axios.create({
      baseURL: `http://localhost:8080/${path}`
    })
  }

  /**
   * Method to READ entities data in backend API
   */
  protected GET = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => (await this.api.get(url, config)).data

  /**
   * Method to CREATE entities data in backend API
   */
  protected PUT = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.put(url, body, config)).data

  /**
   * Method to REPLACE entities data in backend API
   */
  protected POST = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.post(url, body, config)).data

  /**
   * Method to MODIFY entities data in backend API
   */
  protected PATCH = async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => (await this.api.patch(url, body, config)).data

  /**
   * Method to DELETE entities data in backend API
   */
  protected DELETE = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => (await this.api.delete(url, config)).data

  getAll = (): Promise<T[]> => this.GET(BaseServiceEndpointEnum.getAll)

  getById = (id: number): Promise<T> => this.GET(BaseServiceEndpointEnum.getById, { params: id })

  create = (data: Omit<T, 'id'>): Promise<{ id: number }> => this.POST(BaseServiceEndpointEnum.create, data)

  update = (data: Partial<T>): Promise<void> => this.PATCH(BaseServiceEndpointEnum.update, data)

  delete = (id: number): Promise<void> => this.DELETE(BaseServiceEndpointEnum.delete, { params: id })
}
