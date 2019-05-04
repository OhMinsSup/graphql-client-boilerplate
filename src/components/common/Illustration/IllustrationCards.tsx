import React from 'react';
import styled from 'styled-components';
import IllustrationCard from './IllustrationCard';

const IllustrationCardsBlock = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

interface IllustrationCardsProps {
  onOpen: () => void;
}

const IllustrationCards: React.SFC<IllustrationCardsProps> = ({ onOpen }) => {
  return (
    <IllustrationCardsBlock>
      <IllustrationCard onOpen={onOpen} />
    </IllustrationCardsBlock>
  );
};

export default IllustrationCards;
