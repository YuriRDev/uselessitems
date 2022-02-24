import styled from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 64px;
    position: fixed;
    top: 48px;
    color: ${COLORS.Dark};
    font-weight: 800;
    font-size: 24px;
    z-index: 100;
    @media(max-width: 640px) {
        font-size: 14px;
        padding: 0px 32px;
        top: 24px;
}
`