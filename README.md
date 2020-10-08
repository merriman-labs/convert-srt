# SRT Converter [![npm (scoped)](https://img.shields.io/npm/v/@johnny.reina/convert-srt)](https://www.npmjs.com/package/@johnny.reina/convert-srt)
*Convert .srt subtitle files to JavaScript objects*

## Installing
```
npm i @johnny.reina/convert-srt
```

## Usage

### `toSrt(srt: string): Array<Subtitle>`
The main export of this package. Accepts the string contents of a `.srt` file and returns an array of `Subtitle` objects.

### `Subtitle`
```typescript
interface Subtitle {
    index: number;
    from: string;
    to: string;
    text: string;
}
```