import './section5Style.scss'

export default function Section5(){
    return(
        <>
            <section className='section5'>
                <div className='container'>
                    <div className='left'>
                        <h3>Book an Appointment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Name'/>
                            <label htmlFor="gender">
                                <span>Gender</span>
                                <select name="" id="gender"></select>
                            </label>
                            <input type="text" placeholder='Email'/>
                            <input type="text" placeholder='Phone'/>
                            <label htmlFor="date">
                                <span>Date</span>
                                <select name="" id="date"></select>
                            </label>
                            <label htmlFor="time">
                                <span>Time</span>
                                <select name="" id="time"></select>
                            </label>
                            <label htmlFor="doctor">
                                <span>Doctor</span>
                                <select name="" id="doctor"></select>
                            </label>
                            <label htmlFor="department">
                                <span>Department</span>
                                <select name="" id="department"></select>
                            </label>
                        </div>
                        <input type="text" placeholder='Message' className='asd'/>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </section>
        </>
    )
}