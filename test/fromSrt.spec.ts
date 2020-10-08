import { text } from "./fixture/test";
import { fromSrt } from "../src";
import { expect } from "chai";

describe("fromSrt", () => {
  describe("Success scenarios", function () {
    const input = text;
    const actual = fromSrt(input);

    it("Should produce the correct number of subtitle objects", () => {
      expect(actual).to.have.length(4);
    });

    it("Should produce a valid subtitle objects", () => {
      actual.forEach(({ index, from, to, text }) => {
        expect(index).to.be.a("number");
        expect(from).to.be.a("string");
        expect(to).to.be.a("string");
        expect(text).to.be.a("string");
      });
    });
  });
});
