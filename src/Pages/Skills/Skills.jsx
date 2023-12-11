import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Container from "../../Shard/Container";


const Skills = () => {
    return (
        <Container>
            <div className="max-w-xs mx-auto text-center ">
                <h1 className="text-5xl">My Skills </h1>
                <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
            </div>
            <div className="my-20 flex gap-7 flex-col  md:flex-row p-3 md:p-0 ">
                <div className="flex-1">
                    <h1 className="text-5xl">All the skills that I have in that field of work are mentioned..</h1><br />
                    <p className="text-3xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. <br /><br />
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                </div>
                <div className="flex-1 space-y-0">
                    <div className="flex justify-between">
                        <h1>HTML</h1>
                        <p className="text-amber-500">45%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="45" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h1>CSS</h1>
                        <p className="text-amber-500">35%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="35" max="100"></progress><br />
                    <div className="flex justify-between">
                        <h1>JavaScript</h1>
                        <p className="text-amber-500">30%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="30" max="100"></progress><br />
                    <div className="flex justify-between">
                        <h1>React</h1>
                        <p className="text-amber-500">37%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="37" max="100"></progress><br />
                    <div className="flex justify-between">
                        <h1>Database MongoDB</h1>
                        <p className="text-amber-500">40%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="40" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Firebase Authentication</h1>
                        <p className="text-amber-500">30%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="30" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Tailwind</h1>
                        <p className="text-amber-500">35%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="35" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>Jwt and Authentication</h1>
                        <p className="text-amber-500">30%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="30" max="100"></progress>
                    <div className="flex justify-between">
                        <h1>DaisyUI and Bootstrap</h1>
                        <p className="text-amber-500">50%</p>
                    </div>
                    <progress className="progress progress-warning w-full h-1" value="50" max="100"></progress>
                    
                </div>
            </div>
        </Container>
    );
};

export default Skills;