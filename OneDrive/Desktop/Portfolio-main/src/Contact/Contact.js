import Form from "../Extras/Form/Form";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {

    return (
        <div className="w-full max-w-[75rem]  flex flex-col my-8 dark:text-[#eeeeee]">
            <h6 className="text-3xl font-medium mx-5 laptop:text-5xl mb-3 text-slate-800
            dark:text-slate-100">
                Contact Me
            </h6>
            <div className="flex flex-col gap-4 px-5 py-3 items-center laptop:flex-row
            laptop:gap-20 sm:grid sm:grid-cols-2">
                <Form />

                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-600 laptop:text-base">
                        or you can message me directly on
                    </p>

                    {/*Secondary links*/}
                    <div className="flex gap-3 items-center text-5xl text-blue-300 laptop:text-6xl">
                        <a href="https://www.linkedin.com/in/akshatg1403/">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:akshatgoyal1403@gmail.com" >
                            <MdEmail />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
