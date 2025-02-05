import React, { useState } from "react";
import Profile from "../components/Profile";
import { useFontSize } from "../context/FontSizeContext";

const Setting: React.FC = () => {
  // グローバルなフォントサイズを取得
  const { fontSize, setFontSize } = useFontSize();
  const [tempFontSize, setTempFontSize] = useState<number>(fontSize);

  return (
      <div style={{ padding: "20px" }}>
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
              value={tempFontSize}
              onChange={(e) => setTempFontSize(Number(e.target.value))}
          />
          <span style={{ marginLeft: "10px" }}>{tempFontSize}px</span>
          <button
              style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
              onClick={() => setFontSize(tempFontSize)}
          >
            設定を適用
          </button>
        </div>

        {/* プレビューセクション */}
        <div className="preview" style={{ fontSize: `${fontSize}px`, marginTop: "20px" }}>
          <p>こんにちは！これは日本語のテキストです。文字の大きさを変更してみてください。</p>
        </div>
      </div>
  );
};

export default Setting;