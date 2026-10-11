import './section1Style.scss'
import {Photo} from '../../Photo.js'

export default function Section1(){
    return(
        <>
            <section className="section1">
                <div className="container">
                    <div className="title">
                        <p>Caring for Life</p>
                        <h1>Leading the Way in Medical Excellence</h1>
                        <button>Our Services</button>
                    </div>
                    <div className="book">
                        <div className="dblue">
                            <p>Book an Appointment</p>
                            <img src={Photo.Calendar} alt="" />
                        </div>
                        <div className="lblue">
                            <p>Book an Appointment</p>
                            <img src={Photo.Team} alt="" />
                        </div>
                        <div className="blue">
                            <p>Book an Appointment</p>
                            <img src={Photo.Cash} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}