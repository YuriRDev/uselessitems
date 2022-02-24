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

interface GlasseInterface {
    inViewFunction: any;
}

const Glasse: React.FC<GlasseInterface> = ({inViewFunction}) => {
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            inViewFunction()
            console.log("InView Glasses True!!!")
        } else {
            console.log("InView Glasses False :(")
        }
    }, [inView])

    return (
        <Container
        >
            <ItemTitle
            >GLASSE</ItemTitle>
            <ItemDescription>{"There's no “S” because it's only 1 eye, do u get it?"}</ItemDescription>
            <ItemImg
                ref={ref}
                onDragStart={(e) =>
                    e.preventDefault()
                }
                src={require('../../Assets/glasse.png')}
            />
            <BottomContainer>
                <BuyButton>
                    Order now
                </BuyButton>
                <PriceText>
                    R$ 39.99
                </PriceText>
            </BottomContainer>
        </Container>
    );
}

export default Glasse;