import './footerStyle.scss'
import { Link } from 'react-router-dom'
import {Photo} from '../../Photo.js'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='top'>
                    <div className='text'>
                        <h2>MEDDICAL</h2>
                        <p>Leading the Way in Medical Execellence, Trusted Care.</p>
                    </div>
                    <div className='links'>
                        <p className='asd'>Important Links</p>
                        <div>
                            <Link>Appointment</Link>
                            <Link>Doctors</Link>
                            <Link>Services</Link>
                            <Link>About Us</Link>
                        </div>
                    </div>
                    <div className='contact'>
                        <p className='asd'>Contact Us</p>
                        <div>
                            <p>Call: (237) 681-812-255</p>
                            <p>Email: fildineesoe@gmail.com</p>
                            <p>Address: 0123 Some place</p>
                            <p>Some country</p>
                        </div>
                    </div>
                    <div className='last'>
                        <p className='asd'>Newsletter</p>
                        <div>
                            <input type="text" placeholder='Enter your email address'/>
                            <img src={Photo.exp} alt="" />
                        </div>
                    </div>
                </div>
                <div className='line'></div>
                <div className='niz'>
                    <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                    <div>
                        <img src={Photo.inin2} alt="" />
                        <img src={Photo.f2} alt="" />
                        <img src={Photo.inst2} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}