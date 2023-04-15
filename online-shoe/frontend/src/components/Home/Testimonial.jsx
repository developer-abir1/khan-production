import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import Rating from 'react-rating'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { GoQuote } from 'react-icons/go'
const Testimonial = () => {
  return (
    <div className="my-4">
      <h1 className=" text-brand mb-4">Our Happy Clinet </h1>

      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {['1', '2', '3', '4', '5', '6'].map((item) => (
          <SwiperSlide key={item}>
            <div key={item} className="card">
              <div className="card-body">
                <GoQuote size={30} className="mr-2 fst-italic" />
                <p>
                  <span className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iste rem architecto voluptate quaerat esse quasi
                    recusandae! Sit rem nobis recusandae rerum enim, illo
                    molestiae nostrum minus quaerat nesciunt facere.
                  </span>
                  <GoQuote className="fst-italic iconsComment" />
                </p>

                <Rating
                  emptySymbol={<AiOutlineStar size={20} />}
                  fullSymbol={<AiFillStar size={20} color="orange" />}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial
