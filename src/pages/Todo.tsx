import React, { useState } from "react";
import { useFontSize } from "../context/FontSizeContext"; // コンテキストをインポート
import "./Todo.css"; // スタイルを外部ファイルに分離

const Todo: React.FC = () => {
  // FontSizeContextからfontSizeを取得
  const { fontSize } = useFontSize();

  // 初期状態
  const [todos, setTodos] = useState([
    { comment: "今日は洗濯物をやろう", completed: false },
    { comment: "床を今日は拭こう", completed: false },
    { comment: "データがなくならないようにしよう", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // TODOを追加する関数
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { comment: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // 状態を切り替える関数（完了にする）
  const toggleState = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // 未完了リストと完了リストに分ける
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
      <div className="todo" style={{ fontSize: `${fontSize}px` }}>
        <h1>TODOリスト</h1>

        {/* 未完了リスト */}
        <h2>未完了のTODO</h2>
        <table>
          <thead>
          <tr>
            <th className="id">ID</th>
            <th className="comment">コメント</th>
            <th className="state">状態</th>
            <th className="button">操作</th>
          </tr>
          </thead>
          <tbody>
          {incompleteTodos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.comment}</td>
                <td>{todo.completed ? "終了" : "見終了"}</td>
                <td>
                  <button onClick={() => toggleState(index)}>
                    完了にする
                  </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>

        {/* 完了リスト */}
        <h2>完了したTODO</h2>
        <table>
          <thead>
          <tr>
            <th className="id">ID</th>
            <th className="comment">コメント</th>
            <th className="state">状態</th>
          </tr>
          </thead>
          <tbody>
          {completedTodos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.comment}</td>
                <td>{todo.completed ? "完了" : "未完了"}</td>
              </tr>
          ))}
          </tbody>
        </table>

        <div className="add-todo">
          <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="新しいTODOを入力"
          />
          <button onClick={addTodo}>追加</button>
        </div>
      </div>
  );
};

export default Todo;
