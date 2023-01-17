import axios from "axios";

const KEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
  headers: {}
})