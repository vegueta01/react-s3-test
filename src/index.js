import React from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <h1>Mi deply outo: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button test pipeline</Button>
      </Space>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
