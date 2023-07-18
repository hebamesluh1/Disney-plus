import React from 'react'
import { Container, CTA, SignUp, Description, CTALogoTwo,CTALogoOne } from './style'

import img1 from '../../assets/img/cta-logo-one.svg';
import img2 from '../../assets/img/cta-logo-two.png';


const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src={img1} alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon to watch on your TV. with a Disney+ subscription.
                </Description>
                <CTALogoTwo src={img2} alt="" />
            </CTA>
        </Container>
    )
}

export default Login