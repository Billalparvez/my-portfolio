
const Bannar = () => {
    return (
        <div  data-aos="fade-up-right" className="hero min-h-screen mb-10 hover:" style={{ backgroundImage: 'url(https://i.postimg.cc/50YpP0VL/water-droplets-body-water.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div data-aos="fade-down" className="space-y-3">
                    <div className="flex justify-center ">
                        <img className="mt-10 md:mt-32 lg:mt-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[270px] lg:h-[270px] rounded-full border-4  border-solid" src="https://i.postimg.cc/P5QxVVqt/IMG-20230424-WA0007.jpg" alt="" />
                    </div>
                    <h1 className="text-5xl font-bold">Hi,I am<span className="text-orange-400"> Billal </span>Hossain</h1>
                    <p className="text-3xl text-[#bbb8b7]">I am a frontend web developer. I can provide clean code <br />and pixel perfect design.
                        I also make website more .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bannar;