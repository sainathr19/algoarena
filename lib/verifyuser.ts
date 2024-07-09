import axios from "axios"
import base_url from "./url";

const VerifyUser = async  (token : string | undefined) : Promise<boolean> =>{
    if(!token) return false;
    const requestConfig = {
        method: "GET",
        url: base_url+"/auth/verifyuser",
        params: {
          token: token,
        },
      };
      let response = await axios.request(requestConfig);
      let isVerified : boolean = response.data; 
      return isVerified;
}

export default VerifyUser;