import React, { useState } from "react";
import { useFontSize } from "../context/FontSizeContext"; // フォントサイズを取得

const Home: React.FC = () => {
    const { fontSize } = useFontSize(); // フォントサイズを適用

    // 今日やるタスクを定義
    const [todos] = useState([
        { comment: "今日は洗濯物をやろう", completed: false },
        { comment: "床を今日は拭こう", completed: false },
        { comment: "データがなくならないようにしよう", completed: false },
    ]);

    return (
        <div style={{ fontSize: `${fontSize}px` }}>
            <h1>ホームページ</h1>
            <h2>今日やるタスク</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.comment} {todo.completed ? "(完了)" : "(未完了)"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
