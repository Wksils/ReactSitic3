import './section3Style.scss'
import {Photo} from '../../Photo.js'

export default function Section3(){
    const listsInfo = [
    {text: "A Passion for Healing"},
    {text: "All our best"},
    {text: "A Legacy of Excellence"},
    {text: "5-Star Care"},
    {text: "Believe in Us"},
    {text: "Always Caring"}
];
const texts = [
    {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et."},
    {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in."}
];

const firstList = listsInfo.slice(0,3);
const secList = listsInfo.slice(3,6);

    return(
        <>
            <section className='section3'>
                <div className='container'>
                    <div className='title'>
                        <p>CARE YOU CAN BELIEVE IN</p>
                        <h2>Our Services</h2>
                    </div>
                    <div className='info'>
                        <div className='left'>
                            <div>
                                <img src={Photo.medical} alt="" />
                                <p>Free Checkup</p>
                            </div>
                            <div>
                                <img src={Photo.luv} alt="" />
                                <p>Cardiogram</p>
                            </div>
                            <div>
                                <img src={Photo.plus} alt="" />
                                <p>Dna Testing</p>
                            </div>
                            <div>
                                <img src={Photo.med} alt="" />
                                <p>Blood Bank</p>
                            </div>
                            <div>
                                <button>View All</button>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='spisok'>
                                <p>A passion for putting patients first.</p>
                                <div className='asd'>
                                    <ul className='first' id='first'>{firstList.map((i, index) => <li key={index}>{i.text}</li>)}</ul>
                                    <ul className='sec' id='sec'>{secList.map((i, index) => <li key={index}>{i.text}</li>)}</ul>
                                </div>
                            </div>
                            <div className='text' id='text'>{texts.map((i, index) => <p key={index}>{i.text}</p>)}</div>
                        </div>
                        <div className='right' >
                            <img src={Photo.photo1} alt="" />
                            <img src={Photo.photo2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}