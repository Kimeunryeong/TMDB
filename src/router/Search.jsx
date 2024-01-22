import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Search() {
  // const [data, setData] = useState();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const keyword = search.get("keyword");
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTljYzFmY2M2MDNlZWVjZWM4ZWQyMzJhZjNlNWUxMSIsInN1YiI6IjY1OWNhMGJkYjZjZmYxMDI1Yjk0YjM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFWey2MZ1rC8a_zwgsmGlobdyhzXNF-jRu1ll2ABYZE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // setData(json);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <Layout>
      <div className=" w-[100%] h-10 flex items-center justify-center border-b-2">
        <div className="w-[1300px] flex space-x-2">
          <FaSearch />
          <input className="w-full" type="text" placeholder={keyword} />
          <MdCancel />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[1300px] py-16 flex">
          <div className=" w-[20%] ">
            <div className="border border-slate-300 rounded-lg overflow-hidden ">
              <div className=" bg-sky-500 mb-2 text-white font-bold p-4">
                Search Results
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB] hover:font-bold">
                <a href="#">영화</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">TV 프로그램</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">인물</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">컬렉션</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">제작 및 배급사</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">키워드</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
              <div className=" p-4 flex justify-between hover:bg-[#EBEBEB]  hover:font-bold">
                <a href="#">방송사</a>
                <div className="border bg-[#EBEBEB] rounded-md">0</div>
              </div>
            </div>
          </div>
          <div className=" w-[80%] ml-2 p-2">
            <div className="border rounded-lg border-slate-500h-[150px] flex overflow-hidden">
              <div className="w-[10%]">
                <img
                  className="w-full object-cover"
                  src={
                    "https://media.themoviedb.org/t/p/w94_and_h141_bestv2/oXwe3wVhdvvxiixL9UJf6PgBybZ.jpg"
                  }
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-xl">감기</h2>
                <p className="text-slate-400">01월 17, 2024</p>
                <p className="mt-2">
                  감기는 아프다 서른줄부터 몸살이 나기 시작한다 몸살은 견디기
                  어렵다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
