import axios from'axios'
const BOOK_TRAIN_URL ='http://localhost:8082/user/book/add';
const USER_DETAIL = "http://localhost:8082/user/getAll";
class BookService{
    bookTrain(UserDetails){
        return axios.post(BOOK_TRAIN_URL ,UserDetails)
    }
    UserTrain(){
        return axios.get(USER_DETAIL)
    }
}
export default new BookService();