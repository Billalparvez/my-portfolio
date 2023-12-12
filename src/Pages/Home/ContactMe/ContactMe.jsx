
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaPhoneAlt, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from '../../../Shard/Container'
import { useForm } from "react-hook-form"
import { useState } from "react";


const ContactMe = () => {
    const [data, setData] = useState()
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => setData(data)
    console.log(data)

    return (
        <div>
            <div className="max-w-xs mx-auto text-center">
                <h1 className="text-5xl ">Contact Me </h1>
                <div className="divider divider-warning text-6xl text-orange-500"><BsChevronDoubleLeft /><BsChevronDoubleRight /></div>
            </div>
            <Container>
                <div className="flex flex-col justify-between md:flex-row gap-10 my-10">
                    {/* left side */}
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="px-3 md:px-0 flex-1 space-y-5 ">
                        <h1 className="text-4xl border-l-4  border-amber-500"><span className="ml-2">Contact Info</span></h1>
                        <p className="text-2xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p><br />
                        <div className="flex gap-5">
                            <a className=" text-2xl font-sans text-amber-400 border p-5 hover:shadow-2xl rounded-full border-gray-400 hover:border-amber-400"><MdEmail></MdEmail></a>
                            <div className="">
                                <h3 className="text-3xl hover:text-amber-400">Email</h3>
                                <p className="text-2xl hover:text-amber-400">billalparvez80@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <a className=" text-amber-400 text-2xl font-sans  border p-5 hover:shadow-2xl rounded-full border-gray-400 hover:border-amber-400"><FaPhoneAlt /></a>

                            <div className="">
                                <h3 className="text-3xl hover:text-amber-400">Phone</h3>
                                <p className="text-2xl hover:text-amber-400">01859734969</p>

                            </div>
                        </div>
                        <div className="flex gap-5">
                            <a className=" text-2xl font-sans text-amber-400 border p-5 hover:shadow-2xl rounded-full border-gray-400 hover:border-amber-400"><FaLocationDot /></a>
                            <div className="">
                                <h3 className="text-3xl hover:text-amber-400">Address</h3>
                                <p className="text-2xl hover:text-amber-400">Dhaka,Bangladesh</p>
                            </div>
                        </div>
                        <h1 className="text-3xl hover:text-amber-400">Visite my social profile and get connected</h1>
                        <div className="flex px-10 gap-5 text-3xl mt-3">
                        
                            <a href="https://github.com/Billalparvez" className="border p-3 rounded-full hover:text-amber-400 text-gray-400"><AiFillGithub></AiFillGithub></a>
                            <a href="https://web.facebook.com/ac.abcd.a908/" className="hover:text-amber-400 border p-3 rounded-full text-gray-400"><FaFacebook /></a>
                            <a href="https://www.youtube.com/channel/UCb8AIlttTZBfamx1Ab-nefQ" className="hover:text-amber-400 border p-3 rounded-full text-gray-400 "><FaYoutube /></a>
                        </div>

                    </div>
                    {/* right side */}
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className="flex-1 px-3 md:px-0">
                        <h1 className="text-4xl border-l-4 mb-2 border-amber-500"><span className="ml-3">Just Say Hello ..</span></h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">

                            <input className="outline-amber-500  w-full p-4 text-3xl bg-gray-800" placeholder="Your Name" {...register("name", { required: true })} /> <br />
                            <input className="w-full p-4 text-3xl outline-amber-500 bg-gray-800 " placeholder="Your Email" {...register("email", { required: true })} />
                            <input className=" w-full p-4 text-3xl outline-amber-500 bg-gray-800" placeholder="Your Subject" {...register("subject", { required: true })} />
                            <textarea className="w-full px-4 text-3xl outline-black bg-gray-800" name="message" placeholder="Message" id="" cols="" rows="4"{...register("message", { required: true })}></textarea> <br />

                            <input className="btn text-white  bg-amber-600 font-bold text-3xl rounded-tl-3xl rounded-br-3xl hover:bg-orange-600 border-none" type="submit " value="Send Message" />

                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactMe;