/**
 * @author Vibhor Bhatnagar
 */

import React from 'react'
import AppButton from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import { PageWrapper, AboutSectionText, Row, ColumnRow1, Card, Container, Button, ColumnRow2, Footer } from './About.style'

const About = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/')
    }
  return (
    <PageWrapper>
        <AboutSectionText>
            <h1 style={{fontSize: "40px",color: "#FDAD11"}}>About Us</h1>
            <p>At EcoFresh, we are concerned about your health and the environment</p>
            <p>We are constantly thriving to reduce food wastage and make cooking easier for you</p>
        </AboutSectionText>

        <h2 style={{textAlign: "center"}}>Our Team</h2>
        <Row>
            <ColumnRow1>
                <Card>
                    <Container>
                        <h2>Vibhor Bhatnagar</h2>
                        <p class="title">UI/UX Designer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>vibhor.bhatnagar@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow1>

            <ColumnRow1>
                <Card>
                    <Container>
                        <h2>Sumadhur Vaidulya</h2>
                        <p class="title">Full Stack Developer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>sumadhur.vaidulya@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow1>

            <ColumnRow1>
                <Card>
                    <Container>
                        <h2>Meha Desai</h2>
                        <p class="title">Full Stack Developer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>meha.desai@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow1>
        </Row>
        <Row>
            <ColumnRow2>
                <Card>
                    <Container>
                        <h2>Mugdha Agharkar</h2>
                        <p class="title">Front End Developer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>mugdha.agharkar@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow2>

            <ColumnRow2>
                <Card>
                    <Container>
                        <h2>Ruchi Shinde</h2>
                        <p class="title">Back End Developer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>ruchi.Shinde@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow2>

            <ColumnRow2>
                <Card>
                    <Container>
                        <h2>Kandarp Parikh</h2>
                        <p class="title">Full Stack Developer</p>
                        <p>Graduate student at Dalhousie University.</p>
                        <p>kandarp.parikh@dal.ca</p>
                    </Container>
                </Card>
            </ColumnRow2>
        </Row>

        <Row>
        <Button><AppButton color='secondary' onClick={handleClick}>Home</AppButton></Button>
        </Row>
        
    <Footer><FooterContainer /></Footer>
    </PageWrapper>
  )
}

export default About