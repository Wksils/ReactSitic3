import './section2Style.scss'
import {Photo} from '../../Photo.js'

export default function Section2(){
    return(
        <>
            <section className='section2'>
                <div className='container'>
                    <div>
                        <p>Welcome to Meddical</p>
                        <h2>A Great Place to Receive Care</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                    <Link>Learn More <span style={{color: '#1F2B6C'}}>-&lar;</span></Link>
                    <img src={Photo.Team} alt="" />
                </div>
            </section>
        </>
    )
}