import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Mapview.css"; // スタイルを外部ファイルに分離

const MapView: React.FC = () => {
  

  // 各都道府県の中心座標を定義
  const hokkaido: [number, number] = [43.0646, 141.3468]; // 北海道の中心座標
  const aomori: [number, number] = [40.8221, 140.7474]; // 青森県の中心座標
  const akita: [number, number] = [39.7186, 140.1024]; // 秋田県の中心座標
  const iwate: [number, number] = [39.5933, 141.3697]; // 岩手県の中心座標
  const miyagi: [number, number] = [38.2688, 140.8719]; // 宮城県の中心座標
  const yamagata: [number, number] = [38.2404, 140.363]; // 山形県の中心座標
  const fukushima: [number, number] = [37.7503, 140.4675]; // 福島県の中心座標
  const niigata: [number, number] = [37.5215, 138.9188]; // 新潟県の中心座標
  const gunma: [number, number] = [36.3896, 139.0634]; // 群馬県の中心座標
  const tochigi: [number, number] = [36.6893, 139.819]; // 栃木県の中心座標
  const ibaraki: [number, number] = [36.3065, 140.3188]; // 茨城県の中心座標
  const tiba: [number, number] = [35.6073, 140.106]; // 千葉県の中心座標
  const saitama: [number, number] = [35.9975, 139.3476]; // 埼玉県の中心座標
  const tokyo: [number, number] = [35.6895, 139.6917]; // 東京都の中心座標
  const kanagawa: [number, number] = [35.4475, 139.6425]; // 神奈川県の中心座標
  const yamanashi: [number, number] = [35.6122, 138.6116]; // 山梨県の中心座標
  const sizuoka: [number, number] = [34.9769, 138.383]; // 静岡県の中心座標
  const aichi: [number, number] = [35.1802, 136.9064]; // 愛知県の中心座標
  const nagano: [number, number] = [36.6513, 138.181]; // 長野県の中心座標
  const toyama: [number, number] = [36.6953, 137.2113]; // 富山県の中心座標
  const isikawa: [number, number] = [36.5947, 136.6256]; // 石川県の中心座標
  const gihu: [number, number] = [35.7774, 137.055]; // 岐阜県の中心座標
  const hukui: [number, number] = [35.8469, 136.2276]; // 福井県の中心座標
  const kyouto: [number, number] = [35.0116, 135.7681]; // 京都府の中心座標
  const shiga: [number, number] = [35.2153, 136.138]; // 滋賀県の中心座標
  const mie: [number, number] = [34.7303, 136.5086]; // 三重県の中心座標
  const nara: [number, number] = [34.6851, 135.8049]; // 奈良県の中心座標
  const wakayama: [number, number] = [34.2261, 135.1675]; // 和歌山県の中心座標
  const osaka: [number, number] = [34.6937, 135.5023]; // 大阪府の中心座標
  const hyougo: [number, number] = [34.6913, 135.183]; // 兵庫県の中心座標
  const tottori: [number, number] = [35.3606, 133.8514]; // 鳥取県の中心座標
  const okayama: [number, number] = [34.8964, 133.637]; // 岡山県の中心座標
  const kagawa: [number, number] = [34.2437, 133.996]; // 香川県の中心座標
  const tokushima: [number, number] = [33.9181, 134.242]; // 徳島県の中心座標
  const kouti: [number, number] = [33.6068, 133.7751]; // 高知県の中心座標
  const ehime: [number, number] = [33.6248, 132.8131]; // 愛媛県の中心座標
  const hiroshima: [number, number] = [34.3853, 132.4553]; // 広島県の中心座標

  return (
    <MapContainer center={tokyo} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={tokyo}>
        <Popup>東京都</Popup>
      </Marker>
      {/* 他のマーカーも同様に追加 */}
    </MapContainer>
  );
};

export default MapView;
