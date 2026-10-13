import { Link } from 'react-router-dom'
import './section2Style.scss'
import {Photo} from '../../Photo.js'

export default function Section2(){
    return(
        <>
            <section className='section2'>
                <div className='container'>
                    <div>
                        <p className='asd'>WELCOME TO MEDDICAL</p>
                        <h2>A Great Place to Receive Care</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                    <Link>Learn More <span style={{color: '#1F2B6C'}}>-&gt;</span></Link>
                    <img src={Photo.AllDr} alt="" />
                </div>
            </section>
        </>
    )
}