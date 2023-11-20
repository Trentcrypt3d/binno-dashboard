import React from 'react'
import './eventCards.css'
import { events } from '../../assets/events'
import profileImage from '../../siliDeli.svg'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const EventCards = () => {
  return (
    <>
        <section className='eventContent'>
            <div className="grid">
                {events.map((item)=> (
                <div className='eventContentItems' key={item.id}>
                    <div className='img'>
                        <img src={item.cover} alt='' />
                    </div>
                        
                    <div className="eventDetails">
                        <h4 className='eventdate'>{item.date}</h4>
                        <h3>{item.title}</h3>
                    
                            <div className="footerContainer">
                                <div className="eventUserProfileContainer">
                                    <div className="eventPostUserProfile">
                                        <img src={profileImage} alt="User Profile" className="profileImage"/>
                                        <h2 className='eventPostUsername'>SILI DELI</h2>
                                    </div>
                                    <a className='eventLink' href="#">Read Event
                                    <ArrowForwardRoundedIcon/>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                ))} 
            </div>
        </section>
    </>
  ) 
}

export default EventCards;