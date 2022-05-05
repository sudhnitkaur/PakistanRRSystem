import axios from'axios'
const PAY_TRAIN_URL ='';

class PaymentService{

    doPayment(PaymentDetails){
        return axios.post(PAY_TRAIN_URL ,PaymentDetails)
    }

}
export default new PaymentService();