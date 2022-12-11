import React from "react";

import { Container, EmptyMsgBox } from "../../styles/styles";

import { useSelector } from "react-redux";

import { MainWrapper } from "../../components";

const ArchiveNotes = () => {
  const { trashNotes } = useSelector((state) => state.notesList);

  return (
    <Container>
      {trashNotes.length === 0 ? (
        <EmptyMsgBox>There are no notes</EmptyMsgBox>
      ) : (
        <MainWrapper notes={trashNotes} type="trash" />
      )}
    </Container>
  );
};

export default ArchiveNotes;
