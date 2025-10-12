import books from '../assets/books.png'
import { useState } from 'react'
import { Link } from 'react-router'
import magnifying from '../assets/magnifying_glass.png'
import arrow from '../assets/right-arrow.png'

const boxStyles = "flex flex-row bg-white border border-gray-300 w-[300px] h-[60px] rounded-md justify-center items-center gap-7 trans transition:transform duration-500 hover:scale-110"

export default function LandingPage() {
    const [searchText, setSearchText] = useState("")
    
    return (
        <div className="flex flex-col w-[100vw] h-[850px] bg-white justify-center items-center">
            <div className="relative w-[100vw] h-[500px] -mt-[100px]">
                <img className="w-full h-full object-cover" src={books} alt="" />
                <div className="absolute top-[25%] right-[60%] w-[30%]">
                    <h2 className="font-extrabold text-5xl">Find My Professor</h2>
                    <p className="mt-5">Want to know more about the professors here at UMD? This is the perfect place to learn a bit about the courses they teach and their grade distributions.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-10 gap-5 w-[80vw]">
                <h2 className="text-black text-3xl font-bold">Enter a Professor to Start</h2>
                <div className="flex flex-row justify-center items-center w-[100%]">
                    <input className="bg-white text-black border border-gray-300 w-[88%] h-[40px] p-5 rounded-l-md rounded-r-none" type="text" value={searchText} placeholder='Enter professor name...' onChange={(e) => setSearchText(e.target.value)} />
                    <Link to="results" className="flex bg-black w-[12%] h-[43px] rounded-r-md rounded-l-none text-center justify-center items-center cursor-pointer transition:transform duration-200 hover:scale-105" onClick={() => setSearchText("")}>
                        <img className="h-7 w-7 object-contain" src={magnifying} alt="" />
                    </Link>
                </div>
            </div>
            <div className="w-[80vw]">
                <h2 className="text-black pl-10 font-bold text-xl">Recently Searched</h2>
            </div>
            <div className="flex flex-row w-[80vw] pl-10 mt-5 gap-10">
                <div className={boxStyles}>
                    <p className="text-black text-xl">John Jane Doe</p>
                    <img className="h-[13px] translate-y-[1px] object-contain" src={arrow} alt="" />
                </div>
                <div className={boxStyles}>
                    <p className="text-black text-xl">John Jane Doe</p>
                    <img className="h-[13px] translate-y-[1px] object-contain" src={arrow} alt="" />
                </div>
                <div className={boxStyles}>
                    <p className="text-black text-xl">John Jane Doe</p>
                    <img className="h-[13px] translate-y-[1px] object-contain" src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}