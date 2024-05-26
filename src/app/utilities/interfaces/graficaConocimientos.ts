export interface graficaConocimientos{
  value:number,
  name:string,
  bulletSettings:BulletSettings,
  number:number
}
export interface BulletSettings {
  src: string;
}
export interface Settings {
  data: Array<Data>;
  styles: Styles;
  series: Series;
  // title: string;
  id: string;
}
export interface Data {
  name: string;
  value: number;
}
export interface Styles {
  height: string;
}
export interface Series {
  labelsHidden: boolean;
  ticksHidden: boolean;
}
