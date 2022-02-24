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


interface DoubleMugInterface {
    inViewFunction: any;
}

const DoubleMug: React.FC<DoubleMugInterface> = ({inViewFunction}) => {
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            inViewFunction()
            console.log("InView DoubleMug True!!!")
        } else {
            console.log("InView DoubleMug False :(")
        }
    }, [inView])

    return (
        <Container>
            <ItemTitle>No idea for that one</ItemTitle>
            <ItemDescription>{"Sorry"}</ItemDescription>
            <ItemImg
                ref={ref}
                onDragStart={(e) =>
                    e.preventDefault()
                }
                src={require('../../Assets/mugs.png')}
            />
            <BottomContainer>
                <BuyButton>
                    Order now
                </BuyButton>
                <PriceText>
                    R$ 14.99
                </PriceText>
            </BottomContainer>
        </Container>
    );
}

export default DoubleMug;