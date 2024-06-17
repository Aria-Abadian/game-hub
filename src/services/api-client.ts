import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'47f07fddf41640e191b74657e6a3d01b'
    }
})