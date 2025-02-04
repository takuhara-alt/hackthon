import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { ReactDOM } from 'react';
import "../App.css";

const Header: React.FC = () => {
    return (
        <div>
            <header className="app-header">
                <h1>日常生活アプリ</h1>
            </header>

            <nav className='app-date'>
                <p>今日の日付: {new Date().toLocaleDateString('ja-JP')}</p>
            </nav>
        </div>        
    );
    }
export {Header};