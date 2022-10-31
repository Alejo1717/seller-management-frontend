
import axios from "axios";
import { AxiosInstance } from "../../config/axios.intance";
import { ENDPOINTS } from "../../config/env.config";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const getEntities = async (entId: number, pos: boolean) => {
    let res: any;
    if (pos) {
        res = await axios.post(ENDPOINTS.ENTITY, {
            entId: entId,
            pos: "s"
        })
    } else {
        console.log('{ entId: entId }', entId);
        res = await axios.post(ENDPOINTS.ENTITY, { entId: entId });
    console.log('RES', res)
}
return res

}