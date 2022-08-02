import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';

import LabelInputWrapper from '@components/wrappers/LabelInputWrapper';
import IconWrapper from '@src/components/wrappers/IconWrapper';

function SearchBar() {
  return (
    <SearchBarContainer>
      <IconWrapper icon={<AiOutlineCalendar />} />
      <LabelInputWrapper label="체크인" value="" />
      <LabelInputWrapper visible={true} label="" value="1박" />
      <LabelInputWrapper label="체크아웃" value="" />
      <IconWrapper icon={<AiOutlineUser />} />
      <LabelInputWrapper label="성인" value="" />
      <LabelInputWrapper label="어린이" value="" />
      <IconWrapper icon={<AiOutlineSearch />} color="pink_02" />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
