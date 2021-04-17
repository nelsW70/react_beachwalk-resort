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
  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

export default Rooms;
