export interface Iterator<T> {
	next(): T | undefined | null;
	hasNext(): boolean;
	remove(): void;
}
