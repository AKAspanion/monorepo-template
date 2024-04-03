import React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import { add, log } from "@repo/utils";

function Admin(): JSX.Element {
  log("Hey! This is the Admin page.");
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <div>
        <div>This calculation is using utils. 10+20 = {add(10, 20)}</div>
        <br />
        <CounterButton />
      </div>
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default Admin;
