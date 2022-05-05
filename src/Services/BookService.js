import axios from'axios'
const BOOK_TRAIN_URL ='';

class BookService{
    bookTrain(UserDetails){
        return axios.post(BOOK_TRAIN_URL ,UserDetails)
    }

}
export default new BookService();