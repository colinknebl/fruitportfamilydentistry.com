import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { SanityBlockContent } from '../models/SanityBlockContent';
import { Letterhead } from "../client/components/Letterhead";

interface ILetterProps {
    content: SanityBlockContent;
    withLetterhead?: boolean;
}

export function Letter({ content, withLetterhead }: ILetterProps) {
    if (!content.active) {
        return null
    }

    return (
        <StyledPaper>
            {withLetterhead && <Letterhead date={content.date} />}
            <BlockContent blocks={content.blocks} />
        </StyledPaper>
    );
}

export const StyledPaper = styled.div`
    border: 1px solid #333;
    max-height: 11in;
    overflow: auto;
    margin: auto auto 40px auto;
    padding: 40px;
    width: 85vw;
    max-width: 8in;
    color: #333;
    line-height: 1.2;
    white-space: break-spaces;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);

    font-family: 'Times New Roman';
    .date {
        text-align: right;
    }

    footer {
        margin-left: 50px;
        span {
            display: block;
        }
        p:first-line {
            text-indent: -20px;
        }

        @media screen and (max-width: 859px) {
            margin-left: 20px;
        }
    }
`;
