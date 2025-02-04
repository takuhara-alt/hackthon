import React from 'react';
import { Prefectures } from '../data/Prefectures';
import japan_Map from '../assets/japan_map.png';

interface MapProps {
  currentPrefectureId: number;
  onClickPrefecture: (id: number) => void;
}

export const JapanMap: React.FC<MapProps> = ({
  currentPrefectureId,
  onClickPrefecture,
}) => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px',}}>
      {/* 地図画像を背景として表示 */}
      <img
        src={japan_Map}
        alt="日本地図"
        style={{ width: '100%', height: '100%' }}
      />

      {/* 都道府県ボタンを配置 */}
      {Prefectures.map((prefecture) => (
        <button
          key={prefecture.id}
          style={{
            position: 'absolute',
            left: `${prefecture.x}px`,
            top: `${prefecture.y}px`,
            backgroundColor: 'transparent',
            color:
              currentPrefectureId === prefecture.id ? 'red' : 'blue',
            border: 'none',
            cursor: 'pointer',
            transform: 'translate(-50%, -50%)', // ボタンを中心に配置

          }}
          onClick={() => onClickPrefecture(prefecture.id)}
        >
          {/* 見た目を調整する場合、点やラベルを表示 */}
          ●
        </button>
      ))}
    </div>
  );
};