import React, { useState } from "react";
import "./Room.css";

function Room() {
    let [islit, setlit] = useState(false);
    let [temperature, settemperature] = useState(72);
    return (
        <div>
            <div className={`div ${islit ? "lit" : "dark"}`}>
                The Room Is {islit ? "lit" : "dark"}
            </div>
            <div>
                <button
                    className="btn"
                    onClick={() => {
                        setlit(true);
                    }}
                >
                    <b>ON LIGHT</b>
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        setlit(false);
                    }}
                >
                    <b> OFF LIGHT</b>
                </button>
            </div>
            <div className="temp">
                The Current Room Temperature Is: <strong>{temperature}</strong>
            </div>
            <div>
                <button
                    className="btn"
                    onClick={() => {
                        settemperature(++temperature);
                    }}
                >
                    <b>Increase Temperatue</b>
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        settemperature(--temperature);
                    }}
                >
                    <b> Decrease Temperatue</b>
                </button>
            </div>
        </div>
    );
}

export default Room;
