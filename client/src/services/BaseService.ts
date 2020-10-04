import axios from 'axios'

export default function BaseService<T>(path: string) {
  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  return {
    getAll: () => api.get(path),
    getById: (id: number) => api.get(path, { params: id }),
    create: (data: T) => api.post(path, data),
    delete: (id: number) => api.delete(path, { params: id })
  }
}
