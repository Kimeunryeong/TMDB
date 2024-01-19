import React from "react";

export default function NewList() {
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
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
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
        <div className="bg-red-200 ">
          <div>사진리스트</div>
          <div>동그라미로고</div>
          <div>제목</div>
          <div>텍스트</div>
        </div>
      </div>
    </div>
  );
}
