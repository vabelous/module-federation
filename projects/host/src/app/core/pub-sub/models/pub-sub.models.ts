export type IPubSubDataKey = | 'inboundEvent';

export interface IPubSubCallBackFunction {
  (dataKey: IPubSubDataKey, data: {[key: string]: any}): void;
}
