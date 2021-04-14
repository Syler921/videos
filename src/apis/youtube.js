import axios from 'axios'

const KEY = 'AIzaSyAoL2WGr4U59irW7Akkd505QbloLzgFThU'


export default axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        //q:"",
        type:"video",
        key:KEY
    }
})