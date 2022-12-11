//styles
import { Container, EmptyMsgBox } from "../../styles/styles";

//component
import { MainWrapper } from "../../components";

import { useSelector } from "react-redux";

const ArchiveNotes = () => {
  const { archiveNotes } = useSelector((state) => state.notesList);

  return (
    <Container>
      {archiveNotes.length === 0 ? (
        <EmptyMsgBox>There are no notes</EmptyMsgBox>
      ) : (
        <MainWrapper notes={archiveNotes} type="archive" />
      )}
    </Container>
  );
};

export default ArchiveNotes;
