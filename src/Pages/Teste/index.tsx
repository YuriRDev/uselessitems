import React, { useEffect, useState } from 'react';
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

const Teste: React.FC<ThichForkInterface> = ({inViewFunction}) => {
    const { ref, inView } = useInView();
    const [fundo, setFundo] = useState('linear-gradient(180deg, #2A2A2A 0%, rgba(42, 42, 42, 0) 100%)')

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
                <BuyButton
                style={{
                    backgroundImage: fundo,
                }}
                >
                    Order now
                </BuyButton>
                <PriceText
                    onMouseEnter={() => {
                        setFundo('linear-gradient(180deg, #FF0000 0%, rgba(255, 0, 0, 0) 100%)')
                    }}
                >
                    R$ 19.99
                </PriceText>
            </BottomContainer>
        </Container>
    );
}

export default Teste;