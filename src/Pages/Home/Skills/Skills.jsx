import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Container from '../../../Shard/Container'

const Skills = () => {
    return (
        <Container>
            <div className="max-w-xs mx-auto text-center ">
                <h1 className="text-5xl">My Skills </h1>
                <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
            </div>
            <div className="my-20 flex lg:gap-7 gap-3 flex-col  md:flex-row  ">
                <div data-aos="zoom-in-right" className="px-3 md:px-0 flex-1">
                    <h1 className="text-5xl">All the skills that I have in that field of work are mentioned....</h1><br />
                   
                    <p className="text-3xl hidden lg:block">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                </div>
                <div data-aos="zoom-in-left" className=" px-3 md:px-0 flex-1 space-y-0">
                    
                    <div className="flex justify-between">
                        <h1>JavaScript</h1>
                        <p className="text-amber-500">40%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="40" max="100"></progress><br />
                    <div className="flex justify-between">
                        <h1>React</h1>
                        <p className="text-amber-500">65%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="65" max="100"></progress><br />
                    <div className="flex justify-between">
                        <h1>Database MongoDB</h1>
                        <p className="text-amber-500">40%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="40" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Express & Cors</h1>
                        <p className="text-amber-500">60%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="60" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Firebase Authentication</h1>
                        <p className="text-amber-500">40%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="40" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Tailwind</h1>
                        <p className="text-amber-500">70%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="70" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Design</h1>
                        <p className="text-amber-500">80%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="80" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Jwt and Token</h1>
                        <p className="text-amber-500">30%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="30" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>DaisyUI and Bootstrap</h1>
                        <p className="text-amber-500">80%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="80" max="100"></progress>

                </div>
            </div>
        </Container>
    );
};

export default Skills;