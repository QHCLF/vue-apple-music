import axios from 'axios'
import {HOST} from '../common/js/config'

export function getAlbums () {
    const url = HOST + `/album/newest?limit=16`
    return axios.get(url)
}
