import React, { useEffect, useRef } from "react";
import useSelector from "../utils/use-selector";

/**
 * Приложение
 */
function App() {
  // const select = useSelector((state) => ({
  //   // name: state.modals.name,
  // }));

  Telegram.WebApp.ready();

  function BtnRand() {
    document.querySelector(".rand").innerHTML = Math.floor(Math.random() * 100);
  }

  function RequestUSD() {
    const requestURL = "https://www.cbr-xml-daily.ru/daily_json.js";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL);
    xhr.responseType = "json";
    xhr.onload = () => {
      document.querySelector(".price").innerHTML =
        xhr.response["Valute"]["USD"]["Value"];
    };

    xhr.send();
  }

  function RequestEUR() {
    const requestURL = "https://www.cbr-xml-daily.ru/daily_json.js";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL);
    xhr.responseType = "json";
    xhr.onload = () => {
      document.querySelector(".price").innerHTML =
        xhr.response["Valute"]["EUR"]["Value"];
    };

    xhr.send();
  }

  return (
    <div>
      <h1>SIMPLE REACT-TELEGRAM WEBAPP</h1>
      <div className="buttons">
        <button className="btnRand" onClick={BtnRand}>
          Random
        </button>
        <div className="rand">Здесь зарандомится число</div>
        <div className="USDEUR">
          <button className="btnUSD" onClick={RequestUSD}>
            USD
          </button>
          <button className="btnEUR" onClick={RequestEUR}>
            EUR
          </button>
        </div>
        <div className="price">Курс валюты</div>

        <button className="btnBTC" onClick={RequestUSD}>
          BTC
        </button>
        <div className="price">Курс Биткоина</div>
      </div>

      <div>
        <h3>Init Data: </h3>
        <pre id="initData" />
        <h3>Init Data (unsafe): </h3>
        <pre id="initDataUnsafe" />
      </div>
    </div>
  );
}

export default React.memo(App);
