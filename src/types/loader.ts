export type LoaderDataType<TLoaderFn extends (...args: any) => any> =
  Awaited<ReturnType<ReturnType<TLoaderFn>>> extends Response | infer D ? D : never;
