import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "react-js-pagination";
import "./Paging.css";
import CircularProgress from "../components/CircularProgress";
import { Link } from "react-router-dom";

export default function Banana() {
  const [lists, setLists] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
        setLists(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="w-[1100px] flex flex-wrap justify-center gap-4 gap-y-8">
          {/* 아이템 */}
          {lists?.results?.map((list) => (
            <div
              key={list.id}
              className="w-[200px] h-[340px] rounded-lg shadow-lg overflow-hidden"
            >
              {/* 그림 */}
              <Link to={`/detail/${list.id}`} key={list.id}>
                <div className=" w-full h-[240px] bg-blue-300">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
                    alt="img"
                  />
                </div>
                {/* 그림설명 */}
                <div className="relative w-full h-[100px] py-4 px-2">
                  <h2 className="font-semibold">{list.title.substr(0, 40)}</h2>
                  <p className="text-sm ">{list.release_date}</p>
                  {/* 좋아요 평가 */}
                  <div className="absolute left-2 -top-5">
                    <CircularProgress
                      rate={Math.floor(list.vote_average * 10)}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* 페이지 네이션 */}
        <div className=" pt-4">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={lists?.total_pages}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </Layout>
  );
}
