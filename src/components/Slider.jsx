import '../pages/Login.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper h-72 "
      >
        <SwiperSlide className='cover'>
         <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:gap-24 items-center '>
         <img className='lg:w-[300px] lg:h-[300px] md:h-[300px] w-[150px] md:w-[300px] p-8' src="https://t3.ftcdn.net/jpg/00/59/97/06/360_F_59970646_yKe1KumY1pzIUCaWJlu6ZQzhsxdu0qvo.jpg" />
         <p className='text-white p-8  lg:text-3xl md:text-xl text-lg font-bold'>Helpful website for get any alternative information. </p>
         </div>
        </SwiperSlide>
        <SwiperSlide className='cover'>
         <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:gap-24 items-center '>
         <img className='lg:w-[300px] w-[150px] lg:h-[300px] md:h-[300px]  md:w-[300px] p-8' src="https://img.freepik.com/premium-vector/recommend-icon-with-thumbs-up-label-recommended-quality-control_349999-438.jpg" />
         <p className='text-white  p-8 lg:text-3xl md:text-xl text-lg font-bold'>Searching out best recommended product</p>
         </div>
        </SwiperSlide>
        <SwiperSlide className='cover'>
         <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:gap-24 items-center '>
         <img className='lg:w-[300px] lg:h-[300px] md:h-[300px]  w-[150px] md:w-[300px] p-8' src="https://cdn.aarp.net/content/dam/aarp/politics/government-and-elections/2020/07/1140-fact-fake-blocks.jpg" />
         <p className='text-white p-8 lg:text-3xl md:text-xl text-lg font-bold'>True information and alternation reason</p>
         </div>
        </SwiperSlide>
        <SwiperSlide className='cover'>
         <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:gap-24 items-center '>
         <img className='lg:w-[300px] lg:h-[300px] md:h-[300px]  w-[150px] md:w-[300px] p-8' src="https://t3.ftcdn.net/jpg/03/99/52/92/360_F_399529288_4R0IB9yXEVXbEQMKhl6dF9obG6ZJh3sb.jpg" />
         <p className='text-white  p-8 lg:text-3xl md:text-xl text-lg font-bold'>Time worthy and easy to get suggestion</p>
         </div>
        </SwiperSlide>
        <SwiperSlide className='cover'>
         <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:gap-24 items-center '>
         <img className='lg:w-[300px] lg:h-[300px] md:h-[300px]  w-[150px] md:w-[300px] p-8' src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-team-of-happy-people-png-image_4677916.png" />
         <p className='text-white  p-8 lg:text-3xl md:text-xl text-lg font-bold'>Satisfaction for get good recommendation from many </p>
         </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
