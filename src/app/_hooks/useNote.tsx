'use client';

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NoteType } from '@/types/note';
import fetchAPI from '@/hooks/fetchAPI';

type NoteContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  result: NoteType[];
};

export const InitNoteContext = createContext<NoteContextType | null>(null);

export const NoteContext = ({ children, InitData }: { children: ReactNode; InitData: NoteType[] }) => {
  const [search, setSearch] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [result, setResult] = useState<NoteType[]>(InitData);

  useEffect(() => {
    fetchAPI<NoteType[]>(`note-page?search=${search}&tag=${tag}`).then((response) => setResult(response));
  }, [search, tag]);

  const contextValue = useMemo(
    () => ({ search, setSearch, tag, setTag, result }),
    [search, setSearch, tag, setTag, result],
  );
  return <InitNoteContext.Provider value={contextValue || null}>{children}</InitNoteContext.Provider>;
};

export function useNoteContext() {
  const state = useContext(InitNoteContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}
