"use client";
import { AiFillTikTok } from "react-icons/ai";

export default function Intro() {
    const multimediaSrc = process.env.NEXT_PUBLIC_S3;
    const stats = [
        { name: 'desc', value: 'sect' },
        { name: 'desc', value: 'sect' },
    ]

  return (
    <div className="relative isolate overflow-hidden h-[700px] lg:h-[850px]">
        <img
        src='airport.jpg'
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
        >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffffff] to-[#f8f6f6] opacity-10"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
        <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
        >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#989595] to-[#fefefe] opacity-10"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
        <div className="flex flex-col justify-center items-center bg-stone-950 p-3 bg-opacity-30 relative left-auto w-full px-2 h-full">
            <div className="text-slate-50 text-center text-4xl lg:text-6xl font-bold">
                <span>
                CONTACT US!
                </span>
                <br />
                <span className="text-slate-100 font-semibold text-xl lg:text-3xl">
                    WE PROVIDE THE BEST AIRPLANE SOLUTIONS
                </span>
                <br />
                <p className="text-slate-200 text-center text-sm lg:text-xl font-semibold">BE A GO-GETTER...</p>
            </div>
        </div>
    </div>
  )
}