import axios from "axios"

const VerifyUser = async  (token : string | undefined) : Promise<boolean> =>{
    if(!token) return false;
    const requestConfig = {
        method: "GET",
        url: "http://localhost:5000/auth/verifyuser",
        params: {
          token: token,
        },
      };
      let response = await axios.request(requestConfig);
      let isVerified : boolean = response.data; 
      return isVerified;
}

export default VerifyUser;