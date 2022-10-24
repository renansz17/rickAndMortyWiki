import axios from 'axios'
import { toast } from 'react-toastify'
import qs from 'query-string'

const messageError = 'Não foi possivel fazer a requisição'
const defaultUrl = 'https://rickandmortyapi.com/api'

export async function getCharacter(parameter: number) {
  try {
    return await axios.get(`${defaultUrl}/character/${parameter}`)
  } catch (error) {
    toast.error(messageError)
  }
}

export async function getCharacters(params?: {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
  page?: number
}) {
  const queryParams = qs.stringify(params, { skipNull: true })
  try {
    return await axios.get(`${defaultUrl}/character/?${queryParams}`)
  } catch (error) {
    toast.error(messageError)
  }
}

export async function getLocations(params?: {
  name?: string
  type?: string
  dimension?: string
}) {
  const queryParams = qs.stringify(params, { skipNull: true })
  try {
    return await axios.get(`${defaultUrl}/location/?${queryParams}`)
  } catch (error) {
    toast.error(messageError)
  }
}

export async function getEpisodes(params?: {
  name?: string
  episode?: string
}) {
  const queryParams = qs.stringify(params, { skipNull: true })
  try {
    return await axios.get(`${defaultUrl}/episode/?${queryParams}`)
  } catch (error) {
    toast.error(messageError)
  }
}
