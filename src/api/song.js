import axios from 'axios'
import {HOST} from '../common/js/config'





export function getSongUrl () {
    const url = HOST + `/song/url?id=id.mp3`
    return axios.get(url)
}

export function getDetailSong(Id) {
    const url = HOST + `/song/detail?ids`+ "="+ Id
    return axios.get(url)
}


