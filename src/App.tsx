import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// ページコンポーネントのインポート
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Progress from "./pages/Progress";
import "./App.css"; // CSS ファイルをインポート
import Setting from "./pages/Setting";

const App: React.FC = () => {
  return (
    <Router>
      <div id="app">
        {/* ヘッダー */}
        <header className="app-header">
          <h1>日常生活アプリ</h1>
        </header>

        {/* ナビゲーション */}
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/home">ホーム</Link>
            </li>
            <li>
              <Link to="/todo">ToDoリスト</Link>
            </li>
            <li>
              <Link to="/setting">設定</Link>
            </li>
            <li>
              <Link to="/progress">マップ</Link>
            </li>
          </ul>
        </nav>

        {/* メインコンテンツ */}
        <main className="app-main">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>

        {/* フッター */}
        <footer className="app-footer">
          <p>今日の日付: {new Date().toLocaleDateString("ja-JP")}</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
