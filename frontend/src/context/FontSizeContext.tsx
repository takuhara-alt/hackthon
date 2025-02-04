import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// フォントサイズのコンテキストタイプ
type FontSizeContextType = {
    fontSize: number;
    setFontSize: (size: number) => void;
};

// FontSizeProvider の props 型に `children` を追加
type FontSizeProviderProps = {
    children: ReactNode;  // `children` を `ReactNode` として定義
};

// FontSizeContextの作成
export const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

// `localStorage` を使ってフォントサイズを保存するカスタムフック
export const FontSizeProvider: React.FC<FontSizeProviderProps> = ({ children }) => {
    // 初期値はlocalStorageから取得
    const savedFontSize = localStorage.getItem("fontSize");
    const initialFontSize = savedFontSize ? parseInt(savedFontSize) : 16;  // デフォルトは16px

    const [fontSize, setFontSize] = useState<number>(initialFontSize);

    // フォントサイズが変わるたびにlocalStorageに保存
    useEffect(() => {
        localStorage.setItem("fontSize", fontSize.toString());
    }, [fontSize]);

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};

// フォントサイズを取得するカスタムフック
export const useFontSize = (): FontSizeContextType => {
    const context = useContext(FontSizeContext);
    if (!context) {
        throw new Error("useFontSize must be used within a FontSizeProvider");
    }
    return context;
};
