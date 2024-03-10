import React, { useState } from "react";
import * as S from "./Dropdown.styles";
import arrow from "../../assets/dropdownArrow.svg";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.DropdownContainer>
      <S.DropdownHeader>
        <S.DropdownTitle>{title}</S.DropdownTitle>
        <S.DropdownArrow
          src={arrow}
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "open" : ""}
        />
      </S.DropdownHeader>
      {isOpen && <S.DropdownContent>{content}</S.DropdownContent>}
    </S.DropdownContainer>
  );
}

export default Dropdown;
