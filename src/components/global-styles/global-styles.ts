import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "config/theme";

export const GlobalStyles = createGlobalStyle<{ theme: typeof Theme }>`
      ${reset}
      html, body {
        font-family: ${({ theme }) => theme.fontFamily};
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      button {
        outline: none;
      }
`;
