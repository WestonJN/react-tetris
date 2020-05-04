import React from 'react';
import {StyledCell} from './styles/StyleCell';
import {TETROMINOS} from '../tetrominos';

const cell = ({type}) => (
    <StyledCell type={'L'} color ={TETROMINOS['L'].color}>cell</StyledCell>
)

export default cell;