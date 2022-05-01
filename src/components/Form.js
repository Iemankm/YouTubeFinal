import React, { useState } from "react";
import { ListForm,Label,PlaylistName,Createlistbtn } from "./Form.styled";

const Form = ({ ThisonSubmit }) => {
  const [text, setText] = useState("");
  return (
    <ListForm
      onSubmit={(e) => {
        e.preventDefault();
        ThisonSubmit(text);
      }}
    >
      <Label>Playlist Name:</Label>
      <PlaylistName
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
      />
      <Createlistbtn type="submit">Create</Createlistbtn>
    </ListForm>
  );
};
export default Form;
