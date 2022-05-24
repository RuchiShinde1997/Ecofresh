/**
 * @author Vibhor Bhatnagar
 */

 import React from 'react'
 import { useNavigate } from 'react-router-dom'
 import AppButton from '../../components/Button/Button'
 import { PageWrapper, Row, Column, Card, PageHeading, NumberHeading, PageHeadingSection, Button } from './HowItWorks.style'
 

const Pricing = () => {
    const navigate = useNavigate();
  return (
    <PageWrapper>
        <PageHeadingSection>
            <PageHeading>Pricing</PageHeading>
        </PageHeadingSection>

        <PageHeading style={{color: "#fdad11", marginTop: "8%",textAlign: "center"}}>Affordable Pricing 💵</PageHeading>
        <Row>
            <Column>
                <Card>
                    <NumberHeading>1.</NumberHeading>
                    <p>Affordable and fresh straight from the local producers and vendors.</p>
                </Card>
            </Column>

            <Column>
                <Card>
                    <NumberHeading>2.</NumberHeading>
                    <p>Offers to make the decision easier in your head and light on your pocket.</p>
                </Card>
            </Column>

            <Column>
                <Card>
                    <NumberHeading>3.</NumberHeading>
                    <p>Competitive pricing like never before.</p>
                </Card>
            </Column>

        </Row>

        <Button><AppButton color='secondary' onClick={() => navigate('/register')} style={{marginLeft: "90px"}}>Get Started</AppButton></Button>
    </PageWrapper>
  )
}

export default Pricing
