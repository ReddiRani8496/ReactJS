import EventEmitter from "./utils/EventEmitter.js";
import React, { useEffect, useState } from "react";

function LogsComponent() {
  useEffect(() => {
    const onNewLog = (eventData) => {
      setLogs((prevLogs) => [...prevLogs, eventData]);
    };

    const listener = EventEmitter.addListener("NewLog", onNewLog);

    return () => {
      listener.remove();
    };
  });
  const [logs, setLogs] = useState([]);
  return (
    <div>
      {logs.map((log, index) => (
        <p key={index}>{log.text}</p>
      ))}
    </div>
  );
}

export default LogsComponent;
