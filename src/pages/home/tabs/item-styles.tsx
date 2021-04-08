import styled from "styled-components";

import { ImageCarousel } from "components/image-carousel";

export const Wrapper = styled.div`
    margin-bottom: 32px;
`;

export const NameWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    height: 30px;
    background: ${({ theme }) => theme.primaryGreen};
    border-radius: 50%;
    transform: rotate(-12deg);
    vertical-align: center; ;
`;

export const Name = styled.h3<{ status?: boolean }>`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme, status }) => (status ? `${theme.primaryBlue}` : `${theme.primaryRed}`)};
    transform: rotate(12deg);
`;

export const StyledImageCarousel = styled(ImageCarousel)`
    .image-gallery-image {
        max-height: unset;
        height: 225px;
    }

    .image-gallery-svg,
    .image-gallery-left-nav,
    .image-gallery-right-nav {
        height: 40px;
        width: 20px;
    }

    .image-gallery-left-nav,
    .image-gallery-right-nav {
        padding: 0;
    }

    .image-gallery-icon {
        color: ${({ theme }) => theme.primaryGreen};
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const CardWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    color: ${({ theme }) => theme.primaryBackground};
    background: ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius2};
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.primaryGreen};
`;

export const CardContent = styled.div`
    padding: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.4;
`;

export const Detail = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryGreen};
    text-transform: uppercase;

    span {
        text-transform: none;
        font-weight: 700;
        font-size: 16px;
    }
`;
