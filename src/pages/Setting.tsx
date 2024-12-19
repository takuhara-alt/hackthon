import React, { useState } from "react";
import "./Setting.css"; // スタイルを外部ファイルに分離

const Setting: React.FC = () => {
  // 状態の管理
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ja");
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <div id="settings">
      <h1>設定ページ</h1>

      {/* 言語選択セクション */}
      <div className="setting-section">
        <label htmlFor="language">言語を選択：</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* 文字サイズセクション */}
      <div className="setting-section">
        <label htmlFor="font-size">文字の大きさ：</label>
        <input
          type="range"
          id="font-size"
          min={12}
          max={36}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <span>{fontSize}px</span>
      </div>

      {/* プレビューセクション */}
      <div className="preview" style={{ fontSize: `${fontSize}px` }}>
        {selectedLanguage === "ja" ? (
          <p>こんにちは！これは日本語のテキストです。文字の大きさを変更してみてください。</p>
        ) : (
          <p>Hello! This is a text in English. Try changing the font size.</p>
        )}
      </div>
    </div>
  );
};

export default Setting;
