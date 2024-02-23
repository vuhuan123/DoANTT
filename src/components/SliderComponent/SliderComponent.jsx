import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/background/img1.webp'
import img2 from '../../assets/background/img2.webp'
import background from '../../assets/background/aaa.jpg';

function SliderComponent({arrImg}) {
     var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
        // fade: true,
      };
      return (
        <Slider {...settings} className="">
          <div><img src={background} alt="" /></div>
            <div className="">
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
        
        </Slider>
      );
}

export default SliderComponent;