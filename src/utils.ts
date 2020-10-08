import { Subtitle } from "./types";

/**
 *
 * @param {[string, string, string]} chunk
 */
export function parseChunk([index, times, ...text]: Array<string>): Subtitle {
  const [from, to] = times.split(" --> ");
  return {
    index: parseInt(index, 10),
    from,
    to,
    text: text.join("\n"),
  };
}

/**
 * @param {Array<string>} items
 * @returns {Array<Array<string>>}
 */
export function splitChunks(items: Array<string>): Array<Array<string>> {
  return items.reduce<Array<Array<string>>>(
    (memo, val) => {
      if (val.length === 0) {
        memo.push([]);
        return memo;
      }
      last(memo).push(val);
      return memo;
    },
    [[]]
  );
}

/**
 * @template T
 * @param {Array<T>} arr
 */
export function last<T>(arr: Array<T>) {
  return arr[arr.length - 1];
}
