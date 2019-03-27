import axios from 'axios'
import {HOST} from '../common/js/config'

export function getBanner () {
    const url = HOST + `/banner`
    return axios.get(url)
}
