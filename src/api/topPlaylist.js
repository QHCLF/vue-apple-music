import axios from 'axios'
import {HOST} from '../common/js/config'

export function getTopPlayList () {
    const url = HOST + `/personalized?limit=6`
    return axios.get(url)
}

export function getDetailTopPlayID(Id) {
    const url = HOST + `/playlist/detail?id`+ "="+ Id
    return axios.get(url)
}
