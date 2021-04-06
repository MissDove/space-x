import styled from "styled-components";

export const VerticalSpacing = styled.div<{ size: number }>`
    height: ${({ size }) => size}px;
`;
