import React, { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import Title from '../globals/Title';
import Section from '../globals/Section';
import { setRem, media, setColor } from '../../styles';
import roomsData from './rooms-data';

const Rooms = () => {
  const [rooms] = useState(roomsData);

  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {rooms &&
          rooms.length > 0 &&
          rooms.map(room => <Room key={room.id} room={room} />)}
      </RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
  `};
  ${media.desktop`
    width: 100vw;
    max-width: 1170px;
  `};
  ${media.large`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export default Rooms;
