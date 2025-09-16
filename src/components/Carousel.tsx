import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    media: [path: string, alt: string][];
}

const Carousel: React.FC<CarouselProps> = ({ media }) => {

    var settings = {
        infinite: false,
        slidesToShow: 1,
        speed: 300,
        dots: true,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full max-w-full flex my-2">
            <div className="
                max-w-5xl
                min-w-6 

                flex
                flex-col

                m-auto
            ">
            <Slider {...settings} 
                    className=" 
                        p-2 
                        m-2
                        mx-4
                        bg-sky-900 
                        text-gray-800 
                        outline-sky-700

                        dark:bg-sky-900 
                        dark:text-gray-300
                        dark:outline-sky-700

                        rounded-md
                        outline-2

                        flex

                    ">

                {media.map(([path, alt]) => (
                    <div key={path}>
                        {/* w-full h-auto max-w-full  */}
                        <img src={path} alt={alt} className="p-1 rounded-lg m-auto" />
                        <div className="text-center">
                            {alt}
                        </div>
                    </div>
                ))}
            
            </Slider>
            </div>
        </div>
    )
}

export default Carousel;