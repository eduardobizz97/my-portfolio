import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/Theme';

const Line = styled.div`
  margin: auto;
  width: 95%;
  height: 0.2mm;
  background-color: ${COLORS.primaryColor};
`;
const Separator = ()=> <Line></Line> ;

export default Separator;
