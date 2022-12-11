//styles
import { Container, EmptyMsgBox } from "../../styles/styles";

//component
import { MainWrapper } from "../../components";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TagNotes = () => {
  const { name } = useParams();

  const { mainNotes } = useSelector((state) => state.notesList);

  let notes = [];
  mainNotes.forEach((note) => {
    if (note.tags.find(({ tag }) => tag === name)) {
      notes.push(note);
    }
  });

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyMsgBox>There are no notes</EmptyMsgBox>
      ) : (
        <MainWrapper notes={notes} type={name} />
      )}
    </Container>
  );
};

export default TagNotes;
