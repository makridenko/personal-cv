/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const Image = styled.img`
    border-radius: 50%;

    @media ${device.desktop} {
        width: 360px;
        height: 360px;
    }

    @media ${device.tablet} {
        width: 280px;
        height: 280px;
    }

    @media ${device.mobile} {
        width: 280px;
        height: 280px;
    }
`;

const CVAvatar = () => <Image
    src={'https://avatars.githubusercontent.com/u/29210239?v=4'}
/>;

export default CVAvatar;
