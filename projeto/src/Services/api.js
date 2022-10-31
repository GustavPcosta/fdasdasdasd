import axios from 'axios'

export default axios.create({
    baseURL:'https://api.github.com/users/',
    headers:{
        'Content-Type':'apllication/json'
    },
    timeout:10000
})