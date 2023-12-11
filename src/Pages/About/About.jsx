import Container from "../../Shard/Container";

const About = () => {
    return (
        <div className="my-20">
            <Container>
                <h1 className="text-center text-3xl">About Me</h1>
                <div className="flex md:flex-row flex-col gap-10 mt-10 items-center ">
                    <img className="flex-1 h-[500px] md:w-[350px] object-contain" src="https://i.postimg.cc/Bb1n0Drp/IMG-20210616-121057-removebg.png" alt="" />
                    <div className="flex-1 text-3xl space-y-3">
                        <p> Hi ! I am Billal Hossain</p>
                        <p> Birthday : July 05, 2000</p>
                        <p> Phone : 01859734969</p>
                        <p> Email : billalparvez80@gmail.com</p>
                        <p> From : Dhaka,Bangladesh</p>
                        <p> Language : Bangla, English</p>
                        <p>I do not have a brother, the lack of a brother makes me cry all the time</p>
                        <button className="btn text-white bg-orange-500 font-bold text-3xl rounded-tl-3xl rounded-br-3xl hover:bg-orange-600 border-none">Download CV</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;