import React from 'react';
// React 애플리케이션을 HTML의 root 요소에 마운트합니다.
import ReactDOM from 'react-dom/client';
import "./style.scss";
import App from "./App.jsx";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(<App />);