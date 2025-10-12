import magnifying from '../assets/magnifying_glass.png'
import leftArrow from '../assets/left-arrow.png'
import { useState } from 'react'
import { Link } from 'react-router'
export default function ResultsPage() {
    const [searchText, setSearchText] = useState("")
    
    return (
        <div className="relative flex flex-col w-[100vw] h-[850px] bg-white items-center pt-20">
            <div className="flex flex-row justify-center items-center w-[50%]">
                <input className="bg-white text-black border border-gray-300 w-[88%] h-[40px] p-5 rounded-l-md rounded-r-none" type="text" value={searchText} placeholder='Enter professor name...' onChange={(e) => setSearchText(e.target.value)} />
                <div className="flex bg-black w-[12%] h-[43px] rounded-r-md rounded-l-none text-center justify-center items-center cursor-pointer transition:transform duration-200 hover:scale-105" onClick={() => setSearchText("")}>
                    <img className="h-7 w-7 object-contain" src={magnifying} alt="" />
                </div>
            </div>
            <div className="flex flex-row justify-start items-center w-[50%] pt-10">
                <h2 className="text-black text-3xl font-bold">Search Results</h2>
            </div>
            <Link to="/" className="absolute flex flex-row justify-center items-center gap-2 top-[90px] left-[60px] transition:transform duration-300 hover:scale-110">
                <img className="h-[20px] translate-y-[1px] object-contain" src={leftArrow} alt="" />
                <p className="text-gray-300 text-md">Return</p>
            </Link>
        </div>
    )
}