import React, { ChangeEvent, useState } from 'react';
import InputBase from '@/components/atoms/base/inputBase';
import Container from '@/components/atoms/base/container';
import IconBase from '@/components/atoms/base/iconBase';
import { noteSearchContainerCss, noteSearchInputCss } from '@/components/molecules/noteSearch/noteSearch.css';
import { useNoteContext } from '@/hooks/useNote';
import ButtonBase from '@/components/atoms/base/buttonBase';

export default function NoteSearch() {
  const { search, setSearch } = useNoteContext();
  const [input, setInput] = useState<string>(search);
  const onClickSearch = () => {
    setSearch(input);
  };
  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') setSearch(input);
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <Container className={noteSearchContainerCss}>
      <InputBase className={noteSearchInputCss} value={input} onChange={onChangeSearch} onKeyDown={onPressEnter} />
      <ButtonBase onClick={onClickSearch}>
        <IconBase>search</IconBase>
      </ButtonBase>
    </Container>
  );
}
