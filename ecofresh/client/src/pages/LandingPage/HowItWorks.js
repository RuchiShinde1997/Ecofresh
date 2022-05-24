/**
 * @author Vibhor Bhatnagar
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppButton from '../../components/Button/Button'
import { PageWrapper, Row, Column, Card, PageHeading, NumberHeading, PageHeadingSection, Button } from './HowItWorks.style'

const HowItWorks = () => {
    const navigate = useNavigate();
    const handleClick =(e) => {
        navigate('/login')
    }

  return (
    <PageWrapper>
        <PageHeadingSection>
            <PageHeading>How It Works</PageHeading>
        </PageHeadingSection>

        <PageHeading style={{color: "#fdad11", marginTop: "8%",textAlign: "center"}}>3 Easy Steps</PageHeading>
        <Row>
            <Column>
                <Card>
                    <NumberHeading>1.</NumberHeading>
                    <p>Find your favourite recipe, add to cart and get the ingredients home delivered.</p>
                </Card>
            </Column>

            <Column>
                <Card>
                    <NumberHeading>2.</NumberHeading>
                    <p>Want to earn reward points? Upload a recipe and get rewarded.</p>
                </Card>
            </Column>

            <Column>
                <Card>
                    <NumberHeading>3.</NumberHeading>
                    <p>Enjoy your meal without wasting any food.</p>
                </Card>
            </Column>

        </Row>

        <Button><AppButton color='secondary' onClick={handleClick} style={{marginLeft: "90px"}}>Get Started</AppButton></Button>
    </PageWrapper>
  )
}

export default HowItWorks