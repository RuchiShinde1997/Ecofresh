/* 
* @author Ruchi Shinde
*/

import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    PageWrapper, FormWrapper, ImageWrapper, ContentWrapper, ErrorMail,
    Title, ControlContainer, Container, Row, TooltipWrapper, TooltipTitle, TooltipRow
} from '../Login/Login.style';
import { ButtonContainer, ButtonSeparator } from './Profile.style'
import TextBox from '../../components/TextBox/Textbox';
import Navbar from '../../components/Navbar/NavUser';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import AppButton from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import baseURL from '../../config';

const Profile = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setError] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [matchingPassword, setMatchingPasswordError] = useState(false);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [userId, setUserId] = useState("");
    const [readOnlyState, setReadOnlyState] = useState(true);

    const getUserDetailsURL = baseURL + "/users/getUserDetails/";
    let userEmail = localStorage.getItem("emailId");
    useEffect(() => {
        console.log(userEmail);
        axios.get(getUserDetailsURL + userEmail).then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmailId(res.data.email);
            setUserId(res.data.userId);
        }).catch(err => {
            setSomethingWentWrong(somethingWentWrongMsg);
        })
    }, [])
    const requiredInfoString = "Please fill the required information";
    const somethingWentWrongMsg = "Something went wrong, please check your details."
    const emailRegEx = /^[a-zA-Z0-9\.-]+@([a-zA-Z0-9-]+\.)+[a-z]{2,6}$/;
    const passwordRegEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{8,}$/;
    const url = baseURL + "/users/updateUserDetails"
    let helperTextForEmail = "";
    let helperTextForPassword = "";
    if ((!emailId.match(emailRegEx) || emailId == "") && isError) {
        helperTextForEmail = emailId == "" ? requiredInfoString : "Please enter a valid email id";
    }
    if ((!password.match(passwordRegEx) || password == "") && isError) {
        helperTextForPassword = password == "" ? requiredInfoString : "Invalid Password";
    }
    if ((password.match(passwordRegEx) && password !== confirmPassword) && isError) {
        helperTextForPassword = password == "" ? requiredInfoString : "Passwords don't match";
    }


    const saveDetails = (firstName, lastName, emailId) => {
        console.log(firstName, lastName, emailId);
        const emailRegEx = /^[a-zA-Z0-9\.-]+@([a-zA-Z0-9-]+\.)+[a-z]{2,6}$/;
        let isEmailValid = true;
       
        let emptyFieldsDetected = false;

        if (firstName == "" || lastName == "" || emailId == "") {
            emptyFieldsDetected = true
            setError(true);
            //setIsFormSubmitted(true);
        } else {
            if (!emailId.match(emailRegEx)) {
                isEmailValid = false;
            } 
            setError(true);
        }
        if (!emptyFieldsDetected && isEmailValid) {
            let userJson = {
                "email": emailId,
                "firstName": firstName,
                "lastName": lastName,
            };
            console.log(userJson);
            axios.put(url, userJson).then(res => {
                console.log("SUCCESS!")
            }).catch(err => {
                setSomethingWentWrong(somethingWentWrongMsg);
            });

        }
    }

    const linkStyles = {
        paddingTop: "8px",
        textAlign: "center"
    };
    console.log("readOnlyState", readOnlyState);
    return (

        <PageWrapper>
            <Navbar hideButtons={true} />
            <Container>
                <ContentWrapper>
                    <FormWrapper className="myprofile__page">
                        <Title className="myprofile__page" style={{ width: "117px" }}>My Profile</Title>
                        <ControlContainer>
                            <TextBox
                                InputProps={
                                    { readOnly: readOnlyState }
                                }
                                //disabled={readOnlyState}
                                value={firstName}
                                onChange={(event) => {setFirstName(event.target.value)}}

                            >
                                First name
                            </TextBox>
                            <Row />
                            <TextBox
                            InputProps={
                                { readOnly: readOnlyState }
                            }
                                value={lastName}
                                onChange={(event) => {setLastName(event.target.value)}}
                            >
                                Last name
                            </TextBox>
                            <Row />
                            <TextBox
                                value={emailId}
                                InputProps={
                                    { readOnly: readOnlyState }
                                }
                                onChange={(event) => setEmailId(event.target.value)}
                                error={(emailId == "" || !emailId.match(emailRegEx)) && isError}
                                helperText={helperTextForEmail}
                            >
                                Email
                            </TextBox>
                            <Row />
                            <TextBox
                                value={userId}
                                InputProps={
                                    { readOnly: true }
                                }
                            >
                                User ID
                            </TextBox>
                            <Row />
                            <ButtonContainer>
                                <AppButton
                                    color="secondary"
                                    onClick={() => {
                                        setReadOnlyState(false);
                                    }}
                                >
                                    Edit
                                </AppButton>
                                <AppButton
                                    color="secondary"
                                    onClick={() => saveDetails(firstName, lastName, emailId)}
                                >
                                    Save
                                </AppButton>
                            </ButtonContainer>
                            <Row />
                            {
                                somethingWentWrong && (
                                    <ErrorMail>{somethingWentWrong}</ErrorMail>
                                )
                            }

                        </ControlContainer>
                    </FormWrapper>
                    <ImageWrapper className="myprofile__page">
                        <img src="https://cdn.pickuplimes.com/cache/22/13/2213b2b794c1b5c3aa3f120c548f9baa.jpg" />
                    </ImageWrapper>
                </ContentWrapper>
                <FooterContainer />
            </Container>

        </PageWrapper>
    )
}

export default Profile