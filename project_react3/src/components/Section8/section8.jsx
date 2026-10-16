import './section8Style.scss'
import {Photo} from '../../Photo.js'

export default function Section8(){
    return(
        <>
            <section className='section8'>
                <div className='container'>
                    <div className='title'>
                        <p>GET IN TOUCH</p>
                        <h2>Contact</h2>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <div className='cardCont'>
                                <img src={Photo.call} alt="" />
                                <p className='bold'>EMERGENCY</p>
                                <p>(237) 681-812-255</p>
                                <p>(237) 666-331-894</p>
                            </div>
                        </div>
                        <div className='card'>
                             <div className='cardCont'>
                                <img src={Photo.loc} alt="" />
                                <p className='bold'>LOCATION</p>
                                <p>0123 Some place</p>
                                <p>9876 Some country</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardCont'>
                                <img src={Photo.email} alt="" />
                                <p className='bold'>EMAIL</p>
                                <p>fildineeesoe@gmil.com</p>
                                <p>myebstudios@gmail.com</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardCont'>
                                <img src={Photo.time} alt="" />
                                <p className='bold'>WORKING HOURS</p>
                                <p>Mon-Sat 09:00-20:00</p>
                                <p>Sunday Emergency only</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}