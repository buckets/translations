/**
 *  An individual message in a IMessageSet
 */
export interface IMsg<T> {
  val: T;
  translated: boolean|'auto';
  h: string;
  newval?: T;
}
/**
 *  An applications set of messages
 */
export interface IMessageSet {
  [k:string]: IMsg<any>;
}
/**
 *  A locale for the application
 */
export interface ILangPack {
  name: string;
  en_name: string;
  dir: 'ltr'|'rtl';
  numbers: NumberFormat;
  messages: IMessageSet;
  contributors: Array<{
    name: string;
    href?: string;
  }>;
}

//-----------------------------------------------------------------
// Numbers
//-----------------------------------------------------------------
export interface NumberFormat {
  thousands: string;
  decimal: string;
  decimal_places: number;
}
