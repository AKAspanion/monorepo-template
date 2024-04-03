import { CounterButton, Link } from "@repo/ui";
import { add, log } from "@repo/utils";

export const metadata = {
  title: "App | Kitchen Sink",
};

export default function App(): JSX.Element {
  log("Hey! This is the App page.");

  return (
    <div className="container">
      <h1 className="title">
        App <br />
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
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
