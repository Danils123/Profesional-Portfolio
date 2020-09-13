export enum ETypeQueque {
  OBSERVABLE = 1,
  PROMISE,
}

export interface IRequest<T> {
  state: boolean;
  request: T;
}

export interface IQuequeRequest<T> {
  [code: number]: number;
  numberRequest: number;
  requests: IRequest<T>[];
  list: T[];
  addRequest: (T) => {};
  deleteRequest: (T) => {};
}

export class QuequeRequest {
  constructor() {}
}
