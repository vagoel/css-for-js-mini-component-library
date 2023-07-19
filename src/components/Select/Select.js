import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const HiddenSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: max-content;
  padding: 12px 16px;
  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectPresentation = styled.div`
  width: 100%;
  height: 100%;
  color: ${COLORS.gray700};

  ${HiddenSelect}:hover+& {
    color: ${COLORS.black};
  }
`;

const Label = styled.span`
  margin-right: 32px;
  line-height: 18.7px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 9px;
  width: 24px;
  height: 24px;
`;
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <SelectPresentation>
        <Label>{displayedValue}</Label>
        <IconWrapper>
          <Icon id={"chevron-down"}></Icon>
        </IconWrapper>
      </SelectPresentation>
    </Wrapper>
  );
};

export default Select;
