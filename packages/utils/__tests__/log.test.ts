import { log } from "../src/log";

jest.spyOn(global.console, "log");

describe("logger", () => {
  it("prints a message", () => {
    log("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toBeCalledWith("LOGGER: ", "hello");
  });
});
