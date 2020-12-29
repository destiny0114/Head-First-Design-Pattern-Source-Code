import {Iterator} from './Iterator';

export interface Menu<T> {
	createIterator(): Iterator<T>;
}
