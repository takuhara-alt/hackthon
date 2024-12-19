import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "./Mapview.css"; // スタイルを外部ファイルに分離

const Mapview:React.FC = () => {
  useEffect(() => {
    // 知床国立公園の中心座標とズームレベル
    const latitude = 44.3399; // 北緯
    const longitude = 145.3294; // 東経
    const zoomLevel = 15; // ズームレベル (詳細表示)

    // 地図を初期化
    const map = L.map("map").setView([latitude, longitude], zoomLevel);

    // タイルレイヤーを追加 (OpenStreetMapのデータを使用)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // クリーンアップ関数
    return () => {
      map.remove();
    };
  }, []); // 空の依存配列でコンポーネントの初回マウント時のみ実行

  return <div id="map" className="map-container"></div>;
};

export default Mapview;
