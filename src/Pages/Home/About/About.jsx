import Container from "../../../Shard/Container";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
const About = () => {
    return (

        <Container>
            <div className="max-w-xs mx-auto text-center">
                <h1 className="text-5xl ">About Me</h1>
                <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
            </div>
            <div data-aos="zoom-out" className="flex px-3 md:px-0 flex-col md:flex-row  gap-5 lg:gap-20 my-10 items-center ">
                <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="rounded-t-full flex-1  md:w-[350px] object-contain" src="https://i.postimg.cc/Bb1n0Drp/IMG-20210616-121057-removebg.png" alt="" />
                <div className="flex-1 text-3xl space-y-3 ">
                    <p> Hi ! I am Billal Hossain</p>
                    <p> Birthday : July 05, 2000</p>
                    <p> Phone : 01859734969</p>
                    <p> Email : billalparvez80@gmail.com</p>
                    <p> From : Dhaka,Bangladesh</p>
                    <p> Language : Bangla, Hindi</p>
                    <p>I do not have a brother, the lack of a brother makes me cry all the time .</p>
                    <a href="/document.js.pdf" download="/document.js.pdf" className="btn text-white  bg-amber-600 font-bold text-3xl rounded-tl-3xl rounded-br-3xl hover:bg-orange-600 border-none">Download CV</a>
                </div>
            </div>
        </Container>
    );
};

export default About;