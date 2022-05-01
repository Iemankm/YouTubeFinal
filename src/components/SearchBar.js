import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import { SearchVid, SearchForm, SearchBtn } from "./SearchBar.styled";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchVid type="text" {...register("text")} />
      <SearchBtn>Search</SearchBtn>
    </SearchForm>
  );
}
