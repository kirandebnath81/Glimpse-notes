import styled from "styled-components";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",

  "color",
  "background",

  "image",
  "blockquote",
  "code-block",
];

const modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["bold", "italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
  ],
};

const TextEditor = ({ value, setValue, color }) => {
  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder="Write your note here ..."
      />
    </Container>
  );
};

export default TextEditor;

const Container = styled.div`
  .ql-editor {
    height: 200px;
    background-color: ${({ noteColor }) => noteColor};
  }
`;
