import React from 'react';
import styled from 'styled-components';

import { Letterhead } from './Letterhead';
import { StyledPaper } from '../letter';
import { getLetter } from '../../gql/queries/homeLetter';
import { ContentView } from '../content-view';

export function Letter() {
    const letter = getLetter();

    return (
        <StyledLetter>
            <Letterhead date={letter.publishDate} />
            <ContentView content={letter.content} />
        </StyledLetter>
    );
}

const StyledLetter = styled(StyledPaper)``;
