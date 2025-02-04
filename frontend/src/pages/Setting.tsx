import React, { useState } from "react";
import Profile from "../components/Profile";


const Setting: React.FC = () => {
  // 状態の管理

  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <div style={{
      padding: "20px",
    }}>
      
      
      {/* プロフィールコンポーネント */}
      <Profile />
      <p><a href="/profile-setting">プロフィール設定はこちらから→</a></p>

      {/* 設定セクション */}

      <h1>設定ページ</h1>

      <div className="setting-section">
        <label htmlFor="font-size">文字の大きさ：</label>
        <input
          style={{ fontSize: "16px" }}
          type="range"
          id="font-size"
          min={12}
          max={36}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <span style={{ marginLeft: "10px" }}>{fontSize}px</span>
      </div>

      {/* プレビューセクション */}
      <div className="preview" style={{ fontSize: `${fontSize}px` , marginTop: "20px" }}>
        <p>こんにちは！これは日本語のテキストです。文字の大きさを変更してみてください。</p>
      </div>
    </div>
  );
};

export default Setting;