import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdInsertLink,
  MdFormatQuote,
  MdImage,
} from 'react-icons/md';
import palette from '../../../lib/styles/palette';
import RoundButton from '../../common/RoundButton';

const ToolbarBlock = styled.div<{
  shadow: boolean;
}>`
  width: 100%;
  position: sticky;
  top: 5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: sticky;
  width: 100%;
  background: white;
  z-index: 10;
  transition: all 0.125s ease-in;
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.09);
    `}
`;

const ToolbarGroup = styled.div`
  display: flex;
  height: 100%;
`;

const Heading = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
  span {
    font-size: 0.75rem;
  }
`;
const ToolbarItem = styled.button`
  width: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: ${palette.gray6};
  cursor: pointer;
  &:hover {
    color: ${palette.gray9};
    background: ${palette.gray0};
  }
  background: none;
  outline: none;
  border: none;
  padding: 0;
  &.ql-active {
    color: ${palette.cyan6};
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: ${palette.gray4};
`;
export interface ToolbarProps {
  shadow: boolean;
  onClick?: Function;
  onClickPublish: () => void;
}

const Toolbar: React.SFC<ToolbarProps> = ({
  shadow,
  onClick = () => {},
  onClickPublish,
}) => {
  return (
    <ToolbarBlock id="toolbar" shadow={shadow}>
      <ToolbarGroup>
        <ToolbarItem
          className="ql-header"
          value={1}
          onClick={() => onClick('heading1')}
        >
          <Heading>
            H<span>1</span>
          </Heading>
        </ToolbarItem>
        <ToolbarItem
          className="ql-header"
          value={2}
          onClick={() => onClick('heading2')}
        >
          <Heading>
            H<span>2</span>
          </Heading>
        </ToolbarItem>
        <ToolbarItem
          className="ql-header"
          value={3}
          onClick={() => onClick('heading3')}
        >
          <Heading>
            H<span>3</span>
          </Heading>
        </ToolbarItem>
        <ToolbarItem
          className="ql-header"
          value={4}
          onClick={() => onClick('heading4')}
        >
          <Heading>
            H<span>4</span>
          </Heading>
        </ToolbarItem>
      </ToolbarGroup>
      <Separator />
      <ToolbarGroup>
        <ToolbarItem className="ql-bold" onClick={() => onClick('bold')}>
          <MdFormatBold />
        </ToolbarItem>
        <ToolbarItem className="ql-italic" onClick={() => onClick('italic')}>
          <MdFormatItalic />
        </ToolbarItem>
        <ToolbarItem className="ql-strike" onClick={() => onClick('strike')}>
          <MdFormatStrikethrough />
        </ToolbarItem>
      </ToolbarGroup>
      <Separator />
      <ToolbarGroup>
        <ToolbarItem
          className="ql-blockquote"
          onClick={() => onClick('blockquote')}
        >
          <MdFormatQuote />
        </ToolbarItem>
        <ToolbarItem className="ql-link" onClick={() => onClick('link')}>
          <MdInsertLink />
        </ToolbarItem>
        <ToolbarItem className="ql-image" onClick={() => onClick('image')}>
          <MdImage />
        </ToolbarItem>
      </ToolbarGroup>
      <Separator />
      <RoundButton onClick={onClickPublish}>출간하기</RoundButton>
    </ToolbarBlock>
  );
};

export default Toolbar;
