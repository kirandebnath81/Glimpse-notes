//styles
import { NotesContainer } from "../../styles/styles";

//component
import NoteCard from "../NoteCard/NoteCard";

const MainWrapper = ({ notes, type }) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} type={type} />
      ))}
    </NotesContainer>
  );
};

export default MainWrapper;
