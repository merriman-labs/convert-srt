export interface Subtitle {
  index: number;
  from: { timestamp: string; ms: string };
  to: { timestamp: string; ms: string };
  text: string;
}
