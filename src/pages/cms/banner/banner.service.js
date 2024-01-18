import HttpService from "../../../repository/http.service";

class BannerService extends HttpService {
    bannerLists = async({page=1,limit=10,search=""}) => {
        try {
            let data = await this.getRequest(
                '/v1/banner?page='+page+'&limit='+limit+'&search='+search,
                {auth: true}
            )
            return data;
        } catch(exception) {
            throw exception;
        }
    }

    storeBanner =async(data)=>{
        try{
            let response=await this.postRequest(
                '/v1/banner',
                data,
                {file:true,auth:true}
            )
            return response
        }catch(exception){
            throw exception
        }
    }
}

const bannerSvc = new BannerService()
export default bannerSvc