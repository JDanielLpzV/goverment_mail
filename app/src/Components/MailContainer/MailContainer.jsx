import React from "react";
import "./MailContainer.css";
import JSONData from "../../assets/Data.json";
import MailItem from "../MailItem/MailItem";
import { useState } from "react";
export default function MailContainer({ selectedMode }, { searchTerm2 }) {
  const [searchTerm, setSearchTerm] = useState("");
  const f1 = (val) => {
    if (searchTerm2 === "") {
      return val;
    } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  };
  const f2 = (val) => {
    switch (selectedMode) {
      case "Principal":
        if (
          val.area === "Paquetería" ||
          val.area === "Oficio" ||
          val.area === "Importante" ||
          val.area === "Circular"
        ) {
          return val;
        }
        break;
      case "Archivado":
        if (val.area === "Archivado") {
          return val;
        }
        break;
      case "Historico":
        if (val.area === "Enviado" || val.area === "En Proceso") {
          return val;
        }
        break;
    }
  };
  const filters = [f2, f1];
  return (
    <div id="container" className="mailBox">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONData.filter((v) => filters.every((f) => f(v))).map((val, key) => {
        return (
          <MailItem
            author={val.author}
            subject={val.subject}
            content={val.content}
            area={val.area}
            key={key}
          />
        );
      })}
    </div>
  );
}
