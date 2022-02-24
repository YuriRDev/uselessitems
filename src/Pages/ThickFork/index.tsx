import React, { useEffect } from 'react';
import Header from '../../Components/Header';

import { useInView } from 'react-intersection-observer'


import {
    Container,
    ItemTitle,
    ItemDescription,
    ItemImg,
    BottomContainer,
    BuyButton,
    PriceText,
} from './styles';


interface ThichForkInterface {
    inViewFunction: any;
}

const ThickFork: React.FC<ThichForkInterface> = ({inViewFunction}) => {
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            inViewFunction()
            console.log("InView ThichFork True!!!")
        } else {
            console.log("InView ThichFork False :(")
        }
    }, [inView])

    return (
        <Container>
            <ItemTitle><text style={{
                fontWeight: 900
            }}>THICK</text> FORK</ItemTitle>
            <ItemDescription>{"I don't need to explaing why, do I?"}</ItemDescription>
            <ItemImg
                ref={ref}
                onDragStart={(e) =>
                    e.preventDefault()
                }
                src={require('../../Assets/fork.png')}
            />
            <BottomContainer>
                <BuyButton>
                    Order now
                </BuyButton>
                <PriceText>
                    R$ 19.99
                </PriceText>
            </BottomContainer>
        </Container>
    );
}

export default ThickFork;