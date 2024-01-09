import HttpService from "../../../repository/http.service";

class AuthService extends HttpService {
    registerProcess = async (data) =>{
        try{
            let response=await this.postRequest(
                '/v1/register',
                data,
                {file:true}
            )
            return response
        }catch(exception){
            throw exception;
        }
    }
}

const authSvc=new AuthService();
export default authSvc