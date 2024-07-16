import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'a47f07fdxdf41640ex191b74x657e6a3dx01b'
    }
})
