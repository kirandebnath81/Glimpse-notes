import { useState } from "react";

//styles
import { Box, StyledInput, TagsBox, AddBox } from "./TagsModal.styles";
import { FixedContainer, DeleteBox } from "../Modal.styles";

//icons
import { FaCheck, FaTimes, FaPlus, FaMinus } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addTags,
  deleteTags,
  removeTags,
  toggleTagsModal,
} from "../../../features";

//others
import { v4 } from "uuid";
import { getStandardName } from "../../../utils";

const TagsModal = ({ type, addedTags, handleTags }) => {
  const dispatch = useDispatch();
  const { tagsList } = useSelector((state) => state.tags);

  const [inputText, setInputText] = useState("");

  //add tags
  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    dispatch(addTags({ tag: inputText.toLowerCase(), id: v4() }));
    setInputText("");
  };

  // deleting tag from tags list and
  // from the already added notes
  const deleteTagsHandler = (tag, id) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tag }));
  };

  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <div className="editTags__title">
            {type === "add" ? "Add" : "Edit"} Tags
          </div>
          <DeleteBox
            className="editTags__close"
            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}
          >
            <FaTimes />
          </DeleteBox>
        </div>

        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder="New Tag .."
            onChange={(e) => setInputText(e.target.value)}
          />
          <AddBox onClick={submitHandler} check={inputText}>
            <FaCheck />
          </AddBox>
        </form>
        <TagsBox>
          {tagsList.map(({ tag, id }) => (
            <li key={id}>
              <div className="editTags__tag">{getStandardName(tag)}</div>
              {type === "edit" ? (
                <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                  <FaTimes />
                </DeleteBox>
              ) : (
                <DeleteBox>
                  {addedTags?.find(
                    (addedTag) => addedTag.tag === tag.toLowerCase()
                  ) ? (
                    <FaMinus onClick={() => handleTags(tag, "remove")} />
                  ) : (
                    <FaPlus onClick={() => handleTags(tag, "add")} />
                  )}
                </DeleteBox>
              )}
            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  );
};

export default TagsModal;
