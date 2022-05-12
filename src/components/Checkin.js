import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import CheckinService from '../Services/CheckinService'
import image5 from '../assets/image5.jpg'

const Checkin = () => {
    const [pnrNo, setpnrNo] = useState('')
    const history = useHistory();
    const [Ticket, setTicket] = useState([])


    const getCheckin = (e) => {
        e.preventDefault();
        CheckinService.getCheckin(pnrNo).then((response) => {
            setTicket(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        < div style={{ 
            backgroundImage: `url(${image5})` 
          }}>
            <section className='showcase login'>  <div className='logout'><Link to="/userlogin" className="btn btn-success" >Logout</Link> </div>
            <Link to="/payment" className="btn btn-danger"> Back </Link>
                <div className='showcase-overlay'>
                    <form className='form-control' style={{
            backgroundColor: 'beige'}}>
                        <label>PNR Number :</label>
                        <input
                            type='number'
                            name='pnrNo'
                            id='pnrNo'
                            placeholder='Enter your auto generated PNR Number'
                            value={pnrNo}
                            onChange={(e) => setpnrNo(e.target.value)}
                            required
                        />

                        <button className="btn btn-success" onClick={(e) => getCheckin(e)} >Submit </button>

                        <div className="Ticket">
                        <br></br>
                            <h4>Ticket Details</h4>
                            <br></br>

                            <h5>PNR No. : {Ticket.pnrNo}</h5>
                            <h5>Name : {Ticket.name}</h5>
                            <h5>Email : {Ticket.email}</h5>
                            <h5>Gender : {Ticket.gender}</h5>
                            <h5> Allocated Seat No : {Ticket.seatNo}</h5>
                            <h5>Train No. : {Ticket.trainNo}</h5>
                            <h5>Origin : {Ticket.startPoint}</h5>
                            <h5>Destination : {Ticket.endPoint}</h5>
                            <h5>Train Date : {Ticket.trainDate}</h5>
                            <h5> Departure Time : {Ticket.deptTime}</h5>
                            <h5> Duration : {Ticket.duration}</h5>
                            <h5> Class Type : {Ticket.classType}</h5>
                            <h5> Payment : {Ticket.payment}</h5>
                        </div>



                    </form>
                </div>


            </section>
        </div>
    )
}


export default Checkin
