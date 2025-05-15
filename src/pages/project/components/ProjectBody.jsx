import React,{useState , useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/UI/SliderArrows";
import { API_BASE_URL } from "../../../constants";
const ProjectBody = ({data}) => {
  const {i18n , t} = useTranslation()

  const [selectedImg, setSelectedImg] = useState("");
  const [clicked , setClicked] = useState(true)
  const [selectedId , setSelectedId] = useState("")

    useEffect(() => {
    if (data) {
      const defaultProject = data.images[0].url;
      setSelectedImg(API_BASE_URL + defaultProject);
      setSelectedId(data.images[0].id)
   }
  }, [data]);

  return (
    <div>
         <div className={`flex flex-col px-[5%]  justify-center items-center object-cover pt-[5%]` }>
          {selectedImg && (
            <div className="sm:w-[70vw] w-full lg:h-[100vh] h-[50vh] object-cover md:h-[60vh] ">
              <img 
                src={selectedImg}
                alt="Selected"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          )}
        </div>
        
        
          <Slider
            slidesToScroll={1}
            accessibility
            slidesToShow={4}
            touchMove={true}
            autoplay={false}
            arrows={true}
            dots={false}
            lazyLoad="progressive"
            className="h-full w-full mt-10  overflow-hidden px-[5%] md:px-[10px] mb-[5%]"
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            responsive={[
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: 4
                },
              },
              {
                breakpoint: 1700,
                settings: {
                  slidesToShow: 3
                },
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}>
            {data.images.map((item, index) => {
              return(
              <div
              
                key={index}
                className=" sm:h-[20vh] md:h-[30vh] lg:h-[50vh] h-[25vh] focus:outline-none active:outline-none object-cover  px-[10px] w-full sm:w-[33%] ">
                <img
                  src={API_BASE_URL + item.url}
                  className={`cursor-pointer ${selectedId === item.id ? "border-primary border-solid border-[10px]" : ""}  rounded-lg h-full w-full sm:h-full  sm:w-full object-cover `}
                  onClick={() =>{setSelectedId(item.id)
                    setSelectedImg(API_BASE_URL + item.url)
                  }}
                />
              </div>
)})}
          </Slider>
          
    </div>
    
  )
}

export default ProjectBody
