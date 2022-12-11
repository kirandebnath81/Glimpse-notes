import { useState } from "react";

//styles
import {
  ButtonOutline,
  Container,
  NotesContainer,
  EmptyMsgBox,
} from "../../styles/styles";
import { TopBox, Box, InputBox } from "./AllNotes.styles";

//icons
import { BiSearch } from "react-icons/bi";
import { FaSortAmountDown } from "react-icons/fa";

//reddux
import { useDispatch, useSelector } from "react-redux";
import { toggleFiltersModal } from "../../features";

//components
import { FiltersModal, NoteCard } from "../../components";

import { getAllNotes } from "../../utils";

const AllNotes = () => {
  const dispatch = useDispatch();

  const { mainNotes } = useSelector((state) => state.notesList);
  const { viewFiltersModal } = useSelector((state) => state.modal);

  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // handle all filters
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  //clear.filters handler
  const clearHandler = () => {
    setFilter("");
  };

  const searchResult = () => {
    const searchedNotes = mainNotes.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchedNotes.length > 0) {
      return (
        <NotesContainer>
          {searchedNotes.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      );
    } else {
      return <EmptyMsgBox>No Results Found</EmptyMsgBox>;
    }
  };

  return (
    <Container>
      {/* filter modal */}
      {viewFiltersModal && (
        <FiltersModal
          handleFilter={filterHandler}
          handleClear={clearHandler}
          filter={filter}
        />
      )}
      {/* notes */}
      {mainNotes.length === 0 ? (
        <EmptyMsgBox>There are no notes</EmptyMsgBox>
      ) : (
        <>
          <TopBox>
            <InputBox>
              <div className="notes__search-icon">
                <BiSearch />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search note title .."
              />
            </InputBox>
            <div className="notes__filter-btn">
              <ButtonOutline
                onClick={() => dispatch(toggleFiltersModal(true))}
                className="nav__btn"
              >
                <FaSortAmountDown /> <span>Filters</span>
              </ButtonOutline>
            </div>
          </TopBox>

          <Box>
            {searchInput !== ""
              ? searchResult()
              : getAllNotes(mainNotes, filter, searchInput)}
          </Box>
        </>
      )}
    </Container>
  );
};

export default AllNotes;
