import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import ShareTitle from "../../../Components/ShareTitle/ShareTitle";

const Catagory = () => {
  return (
    <>
      <section className="my-10">
        <ShareTitle
          subHeader={"11:00am to 4:00pm"}
          header={"Order Form Here"}
        ></ShareTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <p className="text-white -mt-10 text-center text-xl font-normal">Shalad</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <p className="text-white -mt-10 text-center text-xl font-normal">Pasty</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <p className="text-white -mt-10 text-center text-xl font-normal">Cake</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="text-white -mt-10 text-center text-xl font-normal">Pasty</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="text-white -mt-10 text-center text-xl font-normal">Shalad</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Catagory;
