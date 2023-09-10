import axios from "axios"

export const getData = async (url: string) => 
    (await axios.get(url)).data