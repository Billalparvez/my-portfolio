import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Container from '../../../Shard/Container'
const Projects = () => {
    return (
        <div>
            <Container>
                <div className="max-w-xs mx-auto text-center">
                    <h1 className="text-5xl ">My Projects</h1>
                    <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
                </div>
                {/* slider */}
                <Carousel className="text-center my-10" showArrows={true} imageWidth={500} showThumbs={false}   >
                    <div>
                        <img className=' h-[750px] object-fill' src="https://i.postimg.cc/50TfLDKL/Screenshot-2023-12-12-130335.png" />
                    </div>
                    <div>
                        <img className=' h-[750px] object-fill' src="https://i.postimg.cc/7ZVSxNbS/Screenshot-2023-12-12-124658.png" />
                    </div>
                    <div >
                        <img className=' h-[750px]' src="https://i.postimg.cc/wv6wFBZd/Screenshot-2023-12-12-131126.png" />
                    </div>
                    <div>
                        <img className=' h-[750px]' src="https://i.postimg.cc/wx2tRB9d/Screenshot-2023-12-12-124456.png" />
                    </div>
                    <div>
                        <img className=' h-[750px]' src="https://i.postimg.cc/d3BGLt35/Screenshot-2023-12-12-123731.png" />
                    </div>
                    <div>
                        <img className=' h-[750px]' src="https://i.postimg.cc/k5b8WyD6/Screenshot-2023-12-12-123837.png" />
                    </div>
                    <div>
                        <img className=' h-[750px] object-fill' src="https://i.postimg.cc/bwMkG5Yf/Screenshot-2023-12-12-124001.png" />
                    </div>
                    <div>
                        <img className=' h-[750px] ' src="https://i.postimg.cc/fTYR7gvh/Screenshot-2023-12-12-124202.png" />
                    </div>
                    <div>
                        <img className=' h-[750px] object-fill' src="https://i.postimg.cc/rwnX5S7k/Screenshot-2023-12-12-124756.png" />
                    </div>
                    <div>
                        <img className=' h-[750px] object-fill' src="https://i.postimg.cc/Jzct8dyQ/Screenshot-2023-12-12-124840.png" />

                    </div>


                </Carousel>
            </Container>

        </div>
    );
};

export default Projects;


