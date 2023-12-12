
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Container from "../../../Shard/Container";
import { GiSpotedFlower } from "react-icons/gi";

const Resume = () => {
    return (
        <div>
            <div className="max-w-xs mx-auto text-center">
                <h1 className="text-5xl ">Resume </h1>
                <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
            </div>
            <Container>
                <div className="flex gap-10 my-10 flex-col md:flex-row">
                    <div data-aos="zoom-in-right" className="flex-1 px-3 md:px-0">
                        <h1 className="text-5xl">Experience</h1>
                        <div className="space-y-2 my-5 text-3xl">
                            <h1 className="text-amber-500  font-bold text-4xl">Many stores</h1>

                            <div className="flex  gap-3">
                                <p className="text-amber-400"><GiSpotedFlower /></p><h1> I have not worked in any company so I do not <br /> have experience in the company, but I have worked in many stores.</h1>
                            </div>
                            <div className="flex gap-3">
                            <p className="text-amber-400"><GiSpotedFlower /></p> <p> How to talk to people, how to market a product, etc...</p>
                            </div>
                            <div className="flex gap-3">
                            <p className="text-amber-400"><GiSpotedFlower /></p><p> How to talk to people sincerely</p>
                            </div>
                            <div className="flex gap-3">
                            <p className="text-amber-400"><GiSpotedFlower /></p><p>and A lot of practical experience</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left" className="flex-1 px-3 md:px-0">
                        <h1 className="text-5xl">Education</h1>
                        <div className="text-3xl space-y-2 my-5">
                            <h1 className="text-amber-500 font-bold text-4xl">Bachelor of Business Administration</h1>
                            <h1>BBA</h1>
                            <p>2021-2022</p>
                            <p>National University</p>
                            <p>Group : Management</p>
                        </div>

                        <div className="text-3xl space-y-2 my-5">
                            <h1 className="text-amber-500 font-bold text-4xl">Higher  Secondary Certificate</h1>
                            <h1>HSC</h1>
                            <p>2019-2021</p>
                            <p>Group : Bussiness</p>
                            <p>Nawyab Foyzunnesa gov.clg</p>
                        </div>
                        <div className="text-3xl space-y-2 my-3">
                            <h1 className="text-amber-500 font-bold text-4xl">Secondary School Certificate</h1>
                            <h1>SCC</h1>
                            <p>2019</p>
                            <p>Group : Bussiness</p>
                            <p>Harishchar Union Hight School & Collage</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Resume;