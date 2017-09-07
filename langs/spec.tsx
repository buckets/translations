export { IMessages } from './build';
import { IMessages } from './build';

export interface ILangPack {
  name: string;
  dir: 'ltr'|'rtl';
  messages: IMessages;
}
