import React from "react";
import "../App"


const Footer: React.FC = () => {
  return (

    <footer className="app-footer">
        <ul>
            <li>
                <a href="/home">ホーム</a>
            </li>
            <li>
                <a href="/todo">ToDoリスト</a>
            </li>
            <li>
                <a href="/setting">設定</a>
            </li>
            <li>
                <a href="/progress">マップ</a>
            </li>
        </ul>
    </footer>

  );
};
export default Footer;