import axios from'axios'
const BOOK_TRAIN_URL ='http://localhost:8082/user/book/add';

class BookService{
    bookTrain(UserDetails){
        return axios.post(BOOK_TRAIN_URL ,UserDetails)
    }

}
export default new BookService();