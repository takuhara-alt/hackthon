import React, { useState } from "react";
import "./Todo.css"; // スタイルを外部ファイルに分離

const Todo: React.FC = () => {
  // 初期状態
  const [todos, setTodos] = useState([
    { comment: "今日は洗濯物をやろう", completed: false },
    { comment: "床を今日は拭こう", completed: true },
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

  // 状態を切り替える関数
  const toggleState = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // TODOを削除する関数
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <h1>TODOリスト</h1>
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
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.comment}</td>
              <td>{todo.completed ? "完了" : "未完了"}</td>
              <td>
                <button onClick={() => toggleState(index)}>
                  {todo.completed ? "未完了にする" : "完了にする"}
                </button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </td>
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
