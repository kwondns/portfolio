import { LoaderFunction } from 'react-router-dom';

export type LoaderDataType<TLoaderFn extends LoaderFunction> =
  Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;
