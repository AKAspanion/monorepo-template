import { log } from "@repo/utils";
import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

server.get("/", (_, res) => {
  res.send("API | Kitchen Sink");
});

server.listen(port, () => {
  log(`api running on ${port}`);
});
