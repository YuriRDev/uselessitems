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


interface WholeKitInterface {
    inViewFunction: any;
}

const WholeKit: React.FC<WholeKitInterface> = ({inViewFunction}) => {
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            inViewFunction()
            console.log("InView WholeKit True!!!")
        } else {
            console.log("InView WholeKit False :(")
        }
    }, [inView])

    return (
        <Container>
            <ItemTitle>Oh... we got the whole kit!</ItemTitle>
            <ItemDescription>{"Who made this? Seriously"}</ItemDescription>
            <ItemImg
                ref={ref}
                onDragStart={(e) =>
                    e.preventDefault()
                }
                src={require('../../Assets/wholekit.png')}
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

export default WholeKit;