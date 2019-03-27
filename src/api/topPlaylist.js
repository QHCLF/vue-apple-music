import axios from 'axios'
import {HOST} from '../common/js/config'

export function getTopPlayList () {
    const url = HOST + `/top/playlist/highquality?limit=6`
    return axios.get(url)
}
