import styled from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
`

export const ItemTitle = styled.text`
    color: ${COLORS.Dark};
    font-weight: 700;
    font-size: 64px;
    margin-top: 100px;
    @media(max-width: 640px) {
        font-size: 24px;
}
`

export const ItemDescription = styled.text`
    color: ${COLORS.Dark};
    font-size: 18px;
    @media(max-width: 640px) {
        font-size: 12px;
}
`

export const ItemImg = styled.img`
    height: 154px;
    width: 362px;
    margin-top: 90px;
    object-fit: contain;
    @media(max-width: 640px) {
        height: 73px;
        width: 168px;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 100px;
    @media(max-width: 640px) {
        flex-direction: column;
        bottom: 64px;
    }
`

export const BuyButton = styled.div`
    padding: 14px 40px;
    background-color: ${COLORS.Dark};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    margin-right: 24px;
    cursor: pointer;
    transition: .2s;

    @media(max-width: 640px) {
        margin-right: 0px;
        margin-bottom: 18px;
        font-size: 14px;
        padding: 14px 50px;
       }

    &:hover {
        opacity: .9;
    }
`

export const PriceText = styled.text`
    color: ${COLORS.Dark};
    font-size: 18px;
    font-weight: 500;
    @media(max-width: 640px) {
        font-size: 16px;
}
`