import "./styles.css";
import Ataturk from "./components/Ataturk";
import Picsum from "./components/Picsum";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App() {
  const [option, setOption] = useState("ataturk");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      <form className="chooseOne">
        <label htmlFor="ata">
          Atatürk{" "}
          <input
            checked={option === "ataturk"}
            required
            value="ataturk"
            name="picOption"
            id="ata"
            type="radio"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="random">
          Random{" "}
          <input
            checked={option === "random"}
            onChange={handleChange}
            value="random"
            name="picOption"
            id="random"
            type="radio"
          />
        </label>
      </form>
      <div className="main">
        {option === "ataturk" ? (
          <Ataturk style={{ backgroundColor: "#8ba6a9" }} />
        ) : (
          <Picsum />
        )}
      </div>
    </>
  );
}
