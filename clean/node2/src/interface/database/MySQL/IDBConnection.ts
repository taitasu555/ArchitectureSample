export abstract class IDBConnection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract execute(query: string, params?: any): any;
}
