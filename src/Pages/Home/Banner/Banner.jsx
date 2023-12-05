
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner-2.jpg'
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={banner} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
    );
};

export default Banner;