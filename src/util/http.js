import axios from 'axios';
const baseUrl  = "http://mall-pre.springboot.cn";
class Http {
    static async getData(url,params){
        const result = await axios.get(baseUrl+url,{
            params
        });
        return result.data;
    }
}

export { Http }