import axios from'axios'
const TRAIN_SEARCH_ALL_URL ='';
const TRAIN_ADD_TRAIN_URL ='';
const TRAIN_GET_TRAIN_BY_ID_URL ='';
const TRAIN_UPDATE_TRAIN_BY_ID_URL ='';
const TRAIN_DELETE_TRAIN_BY_ID_URL ='';
const TRAIN_ADMIN_LOGIN_URL=''


class AdminService{

getAllTrains(){
    return axios.get(TRAIN_SEARCH_ALL_URL)
}

addTrain(TrainDetails){
    return axios.post(TRAIN_ADD_TRAIN_URL ,TrainDetails)
}

getTrainById(trainNo){
    return axios.get(TRAIN_GET_TRAIN_BY_ID_URL + '/'+ trainNo);
}

upDateTrain(trainNo,TrainDetails){
    return axios.put(TRAIN_UPDATE_TRAIN_BY_ID_URL + '/'+ trainNo ,TrainDetails);
}

deleteTrain(trainNo){
    return axios.delete(TRAIN_DELETE_TRAIN_BY_ID_URL + '/' + trainNo);
}

adminLogin(adminDetails){
    return axios.post(TRAIN_ADMIN_LOGIN_URL , adminDetails );
}

}
export default new AdminService();