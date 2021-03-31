/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled Components */
const Image = styled.img`
    width: 360px;
    height: 360px;
    border-radius: 100%;
    margin-right: 82px;

    @media (max-width: 768px) {
        width: 280px;
        height: 280px;
        margin-right: 20px;
    }

    @media (max-width: 375px) {
        margin: 0 32px;
    }
`;

const CVAvatar = () => <Image
    src={'https://avatars.githubusercontent.com/u/29210239?v=4'}
/>;

export default CVAvatar;
