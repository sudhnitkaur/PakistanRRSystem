import axios from'axios'
const TRAIN_SEARCH_BY_PARAMS_URL ='http://localhost:8084/fare/findBy';
class SearchService{

    getTrainById(startPoint,endPoint,trainDate){
        return axios.get(TRAIN_SEARCH_BY_PARAMS_URL  +'/'+ startPoint+'/'+ endPoint+ '/'+ trainDate);
    }
    userLogin(userDetails){
        return axios.post(TRAIN_USER_LOGIN_URL , adminDetails );
    }
}
export default new SearchService();