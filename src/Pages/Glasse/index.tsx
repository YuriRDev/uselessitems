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

interface GlasseInterface {
    inViewFunction: any;
}

const Glasse: React.FC<GlasseInterface> = ({ inViewFunction }) => {
    const { ref, inView } = useInView();

    const titleAnimation = useAnimation();
    const subtitleAnimation = useAnimation();
    const imageAnimation = useAnimation();
    const buttonAnimation = useAnimation();

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
            >
                <motion.div
                    animate={titleAnimation}
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                >
                    GLASSE
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
                    {"There's no “S” because it's only 1 eye, do u get it?"}
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
                    src={require('../../Assets/glasse.png')}
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
                        R$ 39.99
                    </PriceText>
                </BottomContainer>
            </motion.div>
        </Container>
    );
}

export default Glasse;