export { IMessages } from './base';
import { IMessages } from './base';

export interface ILangPack {
  name: string;
  dir: 'ltr'|'rtl';
  messages: IMessages;
}
