import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";

export default function NewList() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
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
        console.log(json);
        setLists(json.results);
      })

      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="w-full flex justify-center h-[500px] bg-slate-300 ">
      <div className="w-[1300px] pt-8 bg-slate-50">
        {/* 메인페이지 서브타이틀 What's popular */}
        <div className="m-3 flex">
          <h2 className="font-semibold text-[24px] mr-6">What's Popular</h2>
          {/* 탭바 */}
          <div className="border-2 border-gray-900 rounded-3xl">
            <button>버튼 탭탭탭</button>
          </div>
        </div>
        {/* 서브타이틀 내용 */}
        <div className="w-[165px] mt-2 relative">
          <div className="font-bold"></div>
          {lists.map((list) => (
            <div key={lists.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${list?.poster_path}`}
                  alt="img"
                />
              </div>
              <div>{list?.name}</div>
              <div>{list?.first_air_date}</div>
            </div>
          ))}

          <div className="absolute -top-10">
            <CircularProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
