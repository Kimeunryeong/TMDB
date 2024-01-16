import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import CircularProgress from "./CircularProgress";

export default function Trending() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let tabs = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "tv", label: "TV" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTljYzFmY2M2MDNlZWVjZWM4ZWQyMzJhZjNlNWUxMSIsInN1YiI6IjY1OWNhMGJkYjZjZmYxMDI1Yjk0YjM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFWey2MZ1rC8a_zwgsmGlobdyhzXNF-jRu1ll2ABYZE",
      },
    };
    // fetch 요청 시작전 isLoading 값을 true
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLists(json?.results);
        console.log(json)
      })
      .catch((err) => console.error("error:" + err));
    // fetch 요청이 끝이나면 isLoading 값을 false
    setIsLoading(false);
  }, [activeTab]);

  const firstFiveItems = lists.slice(0, 7);

  return (
    <div className="w-full flex justify-center h-[500px]">
      <div className="w-[1300px] pt-8">
        {/* 트렌딩 타이틀 */}
        <div className="m-3 flex">
          <h2 className="font-semibold text-[24px] mr-6">Trending</h2>
          {/* 탭바 */}
          <div className="border-2 border-gray-900 rounded-3xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "text-white" : "text-black"
                } relative rounded-full px-6 py-2 font-semibold transition text-lg z-10`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                    layoutId="bubble"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* 리스트 */}
        {isLoading ? <div className="flex justify-center"><ClipLoader/></div> :
        <div className="flex justify-center w-full bg-[url('./assets/back.png')] h-full">
          {firstFiveItems.map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div className="flex m-2 w-[165px]">
                <div className="flex flex-col h-full space-y-4">
                  <img
                    className="rounded-2xl"
                    src={`https://image.tmdb.org/t/p/w150_and_h225_face${item.poster_path}`}
                    alt=""
                  />
                  {item.poster}
                  <div className="w-[165px] mt-2 relative">
                    <div className="font-bold">{item.title || item.name}</div>
                    <div>{item.release_date || item.first_air_date}</div>
                    <div className="absolute -top-10"><CircularProgress/></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        }
      </div>
    </div>
  );
}
