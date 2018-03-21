export { IMessages } from './base';
import { IMessages } from './base';

export interface ILangPack {
  name: string;
  dir: 'ltr'|'rtl';
  numbers: {
    group: string;
    group_regex: RegExp;
    decimal: string;
    decimal_regex: RegExp;
  };
  messages: IMessages;
  contributors: Array<{
    name: string;
    href?: string;
  }>;
}
