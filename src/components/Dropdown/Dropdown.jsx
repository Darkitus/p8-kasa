import React, { useState, useEffect, useRef } from "react";
import * as S from "./Dropdown.styles";
import arrow from "../../assets/dropdownArrow.svg";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownElement = useRef(0);
  useEffect(() => {
    dropdownElement.current.className = "firstOpening";
  }, []);
  return (
    <S.DropdownContainer>
      <S.DropdownHeader>
        <S.DropdownTitle>{title}</S.DropdownTitle>
        <S.DropdownArrow
          src={arrow}
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "open" : "close"}
        />
      </S.DropdownHeader>
      <S.DropdownContent
        ref={dropdownElement}
        className={isOpen ? "open" : "close"}
      >
        {content}
      </S.DropdownContent>
    </S.DropdownContainer>
  );
}

export default Dropdown;
