import { AnsiUp } from "ansi_up";
const debug = (await import("debug")).default("Data");
import * as fs from "node:fs";
import * as path from "node:path";

let coverPath = "./static/cover.ascii";
var aup = new AnsiUp();
var preTxt = fs.readFileSync("./static/cover.ascii");

export default function () {
  return aup.ansi_to_html(preTxt);
}
