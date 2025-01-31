import React, { useState } from "react";
import { useFontSize } from "../context/FontSizeContext"; // 📌 ここでインポート！
import "./Setting.css"; // スタイルを外部ファイルに分離

const Setting: React.FC = () => {
    const { fontSize, setFontSize } = useFontSize(); // 📌 ここで使用！
    const [tempFontSize, setTempFontSize] = useState<number>(fontSize); // 一時的なフォントサイズ

    // 「設定」ボタンを押したときにフォントサイズを確定
    const handleSetFontSize = () => {
        setFontSize(tempFontSize);
    };

    return (
        <div id="settings">
            <h1>設定ページ</h1>

            {/* 文字サイズセクション */}
            <div className="setting-section">
                <label htmlFor="font-size">文字の大きさ：</label>
                <input
                    type="range"
                    id="font-size"
                    min={12}
                    max={36}
                    value={tempFontSize}
                    onChange={(e) => setTempFontSize(Number(e.target.value))}
                />
                <span>{tempFontSize}px</span>
            </div>

            {/* 設定ボタン */}
            <button onClick={handleSetFontSize}>設定</button>

            {/* プレビューセクション */}
            <div className="preview" style={{ fontSize: `${tempFontSize}px` }}>
                <p>このテキストでサイズを確認してください。</p>
            </div>
        </div>
    );
};

export default Setting;
