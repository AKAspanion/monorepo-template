import { createRoot } from "react-dom/client";
import { CounterButton } from "../src/CounterButton";

describe("CounterButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<CounterButton />);
    root.unmount();
  });
});
