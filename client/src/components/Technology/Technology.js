/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { ReactComponent as DockerIcon } from '../../ui-kit/docker.svg';
import { ReactComponent as GitIcon } from '../../ui-kit/git.svg';
import { ReactComponent as GitHubIcon } from '../../ui-kit/github.svg';
import { ReactComponent as GitLabIcon } from '../../ui-kit/gitlab.svg';
import { ReactComponent as GraphQLIcon } from '../../ui-kit/graphql.svg';
import { ReactComponent as ReactIcon } from '../../ui-kit/react.svg';
import { ReactComponent as RelayIcon } from '../../ui-kit/relay.svg';
import { ReactComponent as GrapheneIcon } from '../../ui-kit/graphene.svg';
import { ReactComponent as DjangoIcon } from '../../ui-kit/django.svg';

/* Styled Components */
const Container = styled.div`
`;

const StyledTechnology = styled.div`
    width: 100%;

    @media ${device.desktop} {
        display: grid;
        padding-top: 40px;
        grid-template-columns: repeat(9, 80px);
        grid-gap: 58px;
    }

    @media ${device.tablet} {
        display: grid;
        padding-top: 24px;
        grid-template-columns: repeat(9, 62px);
        grid-gap: 18.38px;
    }

    @media ${device.mobile} {
        display: grid;
        padding-top: 24px;
        grid-template-rows: repeat(3, 80px);
        grid-row-gap: 24px;
        grid-template-columns: repeat(3, 80px);
        grid-column-gap: 51px;
    }

    @media ${device.mobileS} {
        display: grid;
        padding-top: 24px;
        grid-template-rows: repeat(3, 80px);
        grid-row-gap: 24px;
        grid-template-columns: repeat(3, 80px);
        grid-column-gap: 30px;
    }
`;

const StyledOneTechnology = styled.div`
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bw {
        filter: grayscale(100%);

        &:hover {
            transition: 0.5s;
            filter: grayscale(0%);
        }
    }

    .django {
        @media ${device.tablet} {
            width: 51.06px;
            height: 17.92px;
        }
    }

    @media ${device.desktop} {
        width: 80px;
        height: 80px;
    }

    @media ${device.tablet} {
        width: 62px;
        height: 62px;
    }

    @media ${device.mobile} {
        width: 80px;
        height: 80px;
    }
`;

const Title = styled.h1`;
    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: 500;
    margin: 0;
    padding: 0;
    color: #FFFFFF;

    @media ${device.desktop} {
        font-size: 24px;
        line-height: 31px;
    }

    @media ${device.tablet} {
        font-size: 22px;
        line-height: 29px;
    }

    @media ${device.mobile} {
        font-size: 20px;
        line-height: 26px;
    }
`;


const techologyList = [
    {
        link: 'https://git-scm.com/',
        icon: <GitIcon />,
    },
    {
        link: 'https://github.com/',
        icon: <GitHubIcon />,
    },
    {
        link: 'https://graphene-python.org/',
        icon: <GrapheneIcon />,
    },
    {
        link: 'https://graphql.org/',
        icon: <GraphQLIcon />,
    },
    {
        link: 'https://reactjs.org/',
        icon: <ReactIcon />,
    },
    {
        link: 'https://relay.dev/',
        icon: <RelayIcon />,
    },
    {
        link: 'https://www.djangoproject.com/',
        icon: <DjangoIcon />,
    },
    {
        link: 'https://www.docker.com/',
        icon: <DockerIcon />,
    },
    {
        link: 'https://gitlab.com/',
        icon: <GitLabIcon />,
    },
];


const OneTechnology = ({link, icon}) => {
    return (
        <StyledOneTechnology>
            <a href={link}>{icon}</a>
        </StyledOneTechnology>
    );
};

const Technology = () => {
    return (
        <Container>
            <Title>Стэк</Title>
            <StyledTechnology>
                {techologyList.map(tech => <OneTechnology
                    key={tech.link}
                    link={tech.link}
                    icon={tech.icon}
                />)}
            </StyledTechnology>
        </Container>
    );
};

export default Technology;
