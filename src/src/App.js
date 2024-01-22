import Layout from "./components/Layout";
import NewList from "./components/NewList";
import SearchPage from "./components/SearchPage";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Layout>
        {/* 검색영역 */}
        <SearchPage />
        {/* Trending */}
        <Trending />
        {/* 최신예고편 */}
        <NewList />
      </Layout>
    </div>
  );
}

export default App;
