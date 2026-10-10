import { Link } from 'react-router-dom'
import './header.scss'
import { Photo } from '../../Photo'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className='pages'>
                        <Link to='/Page1'>Home</Link>
                        <Link>About us</Link>
                        <Link>Services</Link>
                        <Link>Doctors</Link>
                        <Link>News</Link>
                        <Link>Contact</Link>
                    </div>
                    <div className='poisk'>
                        <img src={Photo.Search} alt="" />
                        <button>Appointment</button>
                    </div>
                </nav>
            </header>
        </>
    )
}