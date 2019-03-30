import axios from 'axios'
import {HOST} from '../common/js/config'

export function getSong () {
    const url = HOST + `/song/url?id=id.mp3`
    return axios.get(url)
}
