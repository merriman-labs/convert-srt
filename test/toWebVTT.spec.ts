const { parse: webvtt } = require("node-webvtt");
import { text } from "./fixture/test";
import { fromSrt, toWebVTT } from "../src";
import { expect } from "chai";

describe("toWebVTT", () => {
  const input = text;
  const subs = fromSrt(input);

  it("Should generate valid WebVTT output", () => {
    const actual = toWebVTT(subs);

    const parsed = webvtt(actual);
    expect(parsed.valid).to.eq(true);
  });
});
