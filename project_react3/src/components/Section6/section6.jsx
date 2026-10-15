import './section6Style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Photo } from '../../Photo';

export default function Section6(){
    const drs = [
        {photo:Photo.dr1, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr2, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr3, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr1, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr2, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr3, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr1, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr2, name:"Doctor’s Name", spec:"NEUROLOGY"},
        {photo:Photo.dr3, name:"Doctor’s Name", spec:"NEUROLOGY"}
    ];


    return(
        <>
            <section className='section6'>
                <div className='container'>
                    <div className='title'>
                        <p>TRUSTED CARE</p>
                        <h2>Our Doctors</h2>
                    </div>
                    <div className='swiper'>
                        <Swiper
                            slidesPerView={3}
                            slidesPerGroup={3}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {drs.map((i, index) => (
                                <SwiperSlide key={index}>
                                <div className='slide'>
                                    <img src={i.photo} alt={i.name} />
                                    <div className='info'>
                                    <p className='name'>{i.name}</p>
                                    <p className='spec'>{i.spec}</p>
                                    <div>
                                        <img src={Photo.inin} alt="linkedin" />
                                        <img src={Photo.f} alt="facebook" />
                                        <img src={Photo.inst} alt="instagram" />
                                    </div>
                                    </div>
                                    <button>View Profile</button>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}