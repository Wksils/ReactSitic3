import './section3Style.scss'
import {Photo} from '../../Photo/js'

export default function Section3(){
    return(
        <>
            <section className='section3'>
                <div className='container'>
                    <div className='title'>
                        <p></p>
                        <h2></h2>
                    </div>
                    <div className='info'>
                        <div className='left'>
                            <div>
                                <img src="" alt="" />
                                <p>Free Checkup</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p>Cardiogram</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p>Dna Testing</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p>Blood Bank</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='spisok'>
                                <p>A passion for putting patients first.</p>
                                <ul className='first'></ul>
                                <ul className='sec'></ul>
                            </div>
                            <div className='text'></div>
                        </div>
                        <div className='right'>
                            <img src={Photo.photo1} alt="" />
                            <img src={Photo.photo2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}