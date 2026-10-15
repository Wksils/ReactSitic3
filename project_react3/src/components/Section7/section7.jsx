import './section7Style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Photo } from '../../Photo';

export default function Section7(){
    const news = [
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"},
        {photo:Photo.newsPhoto, date:"Monday 05, September 2021 | By Author", title:"This Article’s Title goes Here, but not too long.", view:"68", likes:"86"}
    ];


    return(
        <>
            <section className='section7'>
                <div className='container'>
                    <div className='title'>
                        <p>BETTER INFORMATION, BETTER HEALTH</p>
                        <h2>News</h2>
                    </div>
                    <div className='swiper'>
                        <Swiper
                            slidesPerView={1}
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
                            {news.map((i, index)=>(
                                <SwiperSlide key={index} className='asd'>
                                    <div className='news'>
                                        <img src={i.photo} alt="" />
                                        <div className='info'>
                                            <p className='date'>{i.date}</p>
                                            <p className='ttle'>{i.title}</p>
                                            <div>
                                                <img src={Photo.view} alt="" />
                                                <p>{i.view}</p>
                                                <img src={Photo.like} alt="" />
                                                <p>{i.likes}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news'>
                                        <img src={i.photo} alt="" />
                                        <div className='info'>
                                            <p className='date'>{i.date}</p>
                                            <p className='ttle'>{i.title}</p>
                                            <div>
                                                <img src={Photo.view} alt="" />
                                                <p>{i.view}</p>
                                                <img src={Photo.like} alt="" />
                                                <p>{i.likes}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news'>
                                        <img src={i.photo} alt="" />
                                        <div className='info'>
                                            <p className='date'>{i.date}</p>
                                            <p className='ttle'>{i.title}</p>
                                            <div>
                                                <img src={Photo.view} alt="" />
                                                <p>{i.view}</p>
                                                <img src={Photo.like} alt="" />
                                                <p>{i.likes}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news'>
                                        <img src={i.photo} alt="" />
                                        <div className='info'>
                                            <p className='date'>{i.date}</p>
                                            <p className='ttle'>{i.title}</p>
                                            <div>
                                                <img src={Photo.view} alt="" />
                                                <p>{i.view}</p>
                                                <img src={Photo.like} alt="" />
                                                <p>{i.likes}</p>
                                            </div>
                                        </div>
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