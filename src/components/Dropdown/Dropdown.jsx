import React, { useState, useEffect, useRef } from "react";
import * as S from "./Dropdown.styles";
import arrow from "../../assets/dropdownArrow.svg";

function Dropdown({ title, content, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownElement = useRef(0);
  useEffect(() => {
    dropdownElement.current.className = "firstOpening";
  }, []);
  return (
    <S.DropdownContainer {...props}>
      <S.DropdownHeader {...props}>
        <S.DropdownTitle {...props}>{title}</S.DropdownTitle>
        <S.DropdownArrow
          {...props}
          src={arrow}
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "open" : "close"}
        />
      </S.DropdownHeader>
      <S.DropdownContent
        {...props}
        ref={dropdownElement}
        className={isOpen ? "open" : "close"}
      >
        {content}
      </S.DropdownContent>
    </S.DropdownContainer>
  );
}

export default Dropdown;
