import { IconString, IconSVG, IconsMap } from './icons';

export as namespace AppLib;

export { IconString, IconSVG, IconsMap };

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
