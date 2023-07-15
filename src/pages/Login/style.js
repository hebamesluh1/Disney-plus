import styled from 'styled-components'

export const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url("https://michaelhtran120.github.io/netflix-replica/static/media/landing-background.bc50e450.jpg");
    background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
`

export const CTA = styled.div `
        max-width: 650px;
        padding: 80px 40px;
        width: 90%;
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items: center;
        margin-top: 40px;
`

export const CTALogoOne = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background-color: #0483ee;
    }
`

export const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`

export const CTALogoTwo = styled(CTALogoOne) `
 width: 90%;
`