import { NotesContainer } from "../styles/styles";

import { NoteCard } from "../components";

//filtering notes
const filteredNotes = (notes, filter) => {
  //priority
  const lowPriority = notes.filter(({ priority }) => priority === "low");
  const highPriority = notes.filter(({ priority }) => priority === "high");

  if (filter === "low") {
    return [...lowPriority, ...highPriority];
  } else if (filter === "high") {
    return [...highPriority, ...lowPriority];
  } else if (filter === "latest") {
    return notes.sort((a, b) => b.createdTime - a.createdTime);
  } else if (filter === "created") {
    return notes.sort((a, b) => a.createdTime - b.createdTime);
  } else if (filter === "edited") {
    const editedNotes = notes.filter(({ editedTime }) => editedTime);
    const normalNotes = notes.filter(({ editedTime }) => !editedTime);

    const sortEdited = editedNotes.sort((a, b) => b.editedTime - a.editedTime);

    return [...sortEdited, ...normalNotes];
  } else {
    return notes;
  }
};

const getAllNotes = (mainNotes, filter, searchInput) => {
  //different notes
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  //normal notes
  if (normal.length !== 0 && pinned.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          All Notes <span>({normal.length})</span>
        </div>
        <NotesContainer>
          {filteredNotes(normal, filter).map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  //Pinned notes
  if (pinned.length !== 0 && normal.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          Pinned Notes <span>({pinned.length})</span>
        </div>
        <NotesContainer>
          {pinned.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  // All notes (pin and normal)
  if (pinned.length !== 0 && normal.length !== 0) {
    return (
      <>
        <div>
          <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {pinned.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
        <div>
          <div className="allNotes__notes-type">
            All Notes <span>({normal.length})</span>
          </div>
          <NotesContainer>
            {filteredNotes(normal, filter)?.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
      </>
    );
  }
};

export default getAllNotes;
