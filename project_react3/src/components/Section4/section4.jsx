import './section4Style.scss'
import {Photo} from '../../Photo.js'

export default function Section4(){
    return(
        <>
            <section className='section4'>
                <div className='container'>
                    <div className='title'>
                        <p>ALWAYS CARING</p>
                        <h2>Our Specialties</h2>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Neurology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Bones</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Oncology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Otorhinolaryngology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Ophthalmology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Cardiovascular</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Pulmonology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Renal Medicine</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Gastroenterology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Urology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Dermatology</p>
                        </div>
                        <div className='card'>
                            <img src={Photo.specialties} alt="" />
                            <p>Gynaecology</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}