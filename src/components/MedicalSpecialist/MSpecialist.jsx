import React from 'react'
import './MSpecialist.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import Doc from "../../assets/docz.png"
const MSpecialist = () => {
  return (
    <section className='MS'>
           <h2>Our Medical Specialist</h2>
            <Swiper
            loop={true}
            spaceBetween={5}
            breakpoints={{
                320:{slidesPerView:1},
                 640:{slidesPerView:2},
                1024:{slidesPerView:3}
        }}
            >
                <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide className='Slides'>
                        <div className='SlidesImgContainer'>
                            <img src={Doc} alt="" />
                        </div>
                        <div className='headings'>
                        <span className='SlidesTitle'>Dr. Heena Sachdeva</span>
                        <span className='SlidesDesc'>Orthopadics</span>
                        </div>
                </SwiperSlide>
            </Swiper>
    </section>
  )
}

export default MSpecialist