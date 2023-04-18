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
                <div>
                  <p>
                    <GoQuote
                      size={30}
                      className="mr-2 fst-italic iconsComment1"
                    />

                    <span className="mt-2 fst-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium iste rem architecto voluptate quaerat esse
                      quasi recusandae! Sit rem nobis recusandae rerum enim,
                      illo molestiae nostrum minus quaerat nesciunt facere.
                    </span>

                    <GoQuote size={30} className="fst-italic  iconsComment  " />
                  </p>
                </div>
                <div className=" d-flex justify-content-center">
                  <Rating
                    emptySymbol={<AiOutlineStar size={20} />}
                    fullSymbol={<AiFillStar size={20} color="orange" />}
                    initialRating={4}
                    readonly
                  />
                </div>
                <div className=" d-flex justify-content-evenly mt-2">
                  <div>
                    <img
                      src="https://i.ibb.co/7bQQYkX/Ellipse-1.png"
                      alt=""
                      className="  rounded-circle border border-2 border-secondary "
                      width={50}
                    />
                  </div>
                  <div>
                    <h6 className="text-brand">Nash Patrik</h6>
                    <p className="text-secondary">California</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial
