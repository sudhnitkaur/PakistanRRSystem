import axios from'axios'
const GET_CHECKIN_URL ='http://localhost:8086/checkIn/get/checkin/{pnrNo}';

class CheckinService{
    getCheckin(pnrNo){
        return axios.get(GET_CHECKIN_URL + '/' + pnrNo)
    }

}
export default new CheckinService();