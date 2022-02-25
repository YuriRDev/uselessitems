import React, { useEffect } from 'react';
import Header from '../../Components/Header';

import { useInView } from 'react-intersection-observer'

import { motion, useAnimation } from 'framer-motion';

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

const WholeKit: React.FC<WholeKitInterface> = ({ inViewFunction }) => {
    const { ref, inView } = useInView();

    const titleAnimation = useAnimation();
    const subtitleAnimation = useAnimation();
    const imageAnimation = useAnimation();
    const buttonAnimation = useAnimation();

    const handleView = () => {
        titleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5 }
        })

        subtitleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .3, delay: .3 }
        })

        imageAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .3, delay: .5 }
        })

        buttonAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .3, delay: .8 }
        })
    }

    useEffect(() => {
        if (inView) {
            inViewFunction()
            handleView()
            console.log("InView WholeKit True!!!")
        } else {
            console.log("InView WholeKit False :(")
        }
    }, [inView])

    return (
        <Container>
            <ItemTitle>
                <motion.div
                    animate={titleAnimation}
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                >
                    Oh... we got the whole kit!
                </motion.div>
            </ItemTitle>
            <ItemDescription>
                <motion.div
                    animate={subtitleAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                >
                    {"Who made this? Seriously"}
                </motion.div>
            </ItemDescription>
            <motion.div
                animate={imageAnimation}
                initial={{
                    opacity: 0,
                    y: 0
                }}
            >

                <ItemImg
                    ref={ref}
                    onDragStart={(e) =>
                        e.preventDefault()
                    }
                    src={require('../../Assets/wholekit.png')}
                />
            </motion.div>
            <motion.div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                animate={buttonAnimation}
                initial={{
                    opacity: 0,
                    y: 0
                }}
            >
                <BottomContainer>
                    <BuyButton>
                        Order now
                    </BuyButton>
                    <PriceText>
                        R$ 19.99
                    </PriceText>
                </BottomContainer>
            </motion.div>
        </Container>
    );
}

export default WholeKit;