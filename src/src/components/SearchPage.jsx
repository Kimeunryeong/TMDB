import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState()
  const handleClick = ()=> {
    navigate(`/search?keyword=${keyword}`)
    
  }
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <div className="w-full flex justify-center">
        {/* 이미지 div */}
        <div className="w-[1300px] h-[350px] bg-[url('https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover relative flex px-12 py-10">
          {/* 중앙정렬된 컨테이너 */}
          <div className="w-full h-full z-10 text-white flex flex-col justify-around">
            {/* 타이틀 */}
            <div className=" -space-y-4">
              <h1 className="text-[48px] font-bold">Welcome,</h1>
              <h2 className="text-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>

            {/* 인풋박스 */}
            <div className="relative flex">
              <input
                onChange={handleChange}
                className="outline-none text-gray-600 w-full py-3 px-3 rounded-3xl"
                type="text"
                placeholder="Search for movie, tv, show, person ..."
              />
              <button onClick={handleClick} className="py-3 px-6 rounded-3xl absolute right-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-300 font-semibold hover:text-black">
                Search
              </button>
            </div>
          </div>
          {/* absolute 가상 div */}
          <div className=" absolute top-0 left-0 w-full h-full bg-blue-800/40"></div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* 이미지 div */}
        <div className="w-[1300px] h-[350px] bg-[url('./assets/main2.jpg')] bg-center bg-cover relative flex px-12 py-10">
          {/* 중앙정렬된 컨테이너 */}
          <div className="w-full h-full z-10 text-white flex flex-col justify-around">
            {/* 타이틀 */}
            <div className=" -space-y-6">
              <h1 className="text-[60px] font-bold">That's a,<br/>wrap 2023</h1>
              <p className="text-[20px]">
              The best (and worst) of the year from TMDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
