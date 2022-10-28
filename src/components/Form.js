import React from 'react'
import styled from 'styled-components'
import Profile from '../assets/profile.png'
import Eye from '../assets/button.png'

const Form = () => {
  return (
    <Container>
        <ProfileWrapper>
            {/* <FontAwesomeIcon icon="fa-thin fa-arrow-left-long" /> */}
            <a href="">Back</a>
            <img src={Profile} alt="" />
            <h6>Personal Account</h6>
            <h1>Andrew@polka.io</h1>
        </ProfileWrapper>
        <PasswordForm>
            <label for="password">Password</label>
            <input type="email" name="password" placeholder='Type Password' />
            <img src={Eye} alt="" />
            <h6>Forgot password? <span>Reset</span></h6>
        </PasswordForm>
        <SignInWithChekbox>
            <div>
                <input type="checkbox"></input>
                <span>Stay signed in</span>
            </div>
            <button>Sign in</button>
        </SignInWithChekbox>
        <Footer>
            <p>This site is protected by reCAPTCHA and the Google 
             <a href='#'> Privacy Policy</a> and 
             <a href='#'> Terms of Service</a> apply.
            </p>
        </Footer>
    </Container>
  )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 528px;
    height: 654px;

    background: #FFFFFF;


    border: 1px solid #F7F7F7;


    box-shadow: 24px 36px 64px -14px rgba(77, 77, 77, 0.15);
    border-radius: 20px;

`

const ProfileWrapper = styled.div`

    width: 400px;
    position: relative;
    margin-top:64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 14px;

    img{

        width: 128px;
        height: 128px;
        margin: 0;


        background: #F7F7F7;

        border: 1px solid #E6E6E6;
        border-radius: 999px;


    }

    h6{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'General Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        text-align: center;


        color: #808080;


    }

    h1{
        margin-top: -10px;
        font-family: 'General Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
/* identical to box height, or 133% */

        text-align: center;
        letter-spacing: -0.01em;

/* Neutral/Black */

        color: #000000;

    }

    a{
        position: absolute;
        top: 0;
        left: 0;
        text-decoration: none;
        color:
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        text-align: center;

        /* Gray/500 */

        color: #808080;
    }
`
const PasswordForm = styled.form`

    display: inline;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 0px;
    gap: 8px;

    /* position: absolute;
    width: 400px;
    height: 116px;
    left: 64px;
    top: 304px; */

    input{
        font-family: 'General Sans';
        padding: 14px 24px;
        box-sizing: border-box;

        width: 400px;
        height: 60px;

        /* Neutral/White */

        background: #FFFFFF;
        /* Blue/400 */

        border: 1.5px solid #6877CA;
        border-radius: 999px;

        /* Inside auto layout */

    }

    input:focus{
        outline: none;
        border: 1.5px solid #6877CA;
    }
    label{
        display: block;
        margin-bottom: 2px;
        margin-left: 24px;
        text-align: left;
        font-family: 'General Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* Gray/800 */

        color: #333333;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
    }
    img{
        margin-left: -50px;
        transform: translateY(35%);
        cursor: pointer;
    }

    h6{
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        text-align: center;

        /* Gray/800 */

        color: #333333;

        span{
            color: #6877CA;
            font-weight: bold;
        }
    }






`

const SignInWithChekbox = styled.div`

    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        margin-left: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-family: 'General Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            /* identical to box height, or 171% */

            text-align: center;

            /* Gray/800 */

            color: #333333;
        }

        input{
            background: #4255BD;
/* Neutral/White */

        border: 1.5px solid #FFFFFF;
        }

        
    }

    button{
            box-sizing: border-box;

/* Auto layout */

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 10px;

            width: 180px;
            height: 60px;

            /* Blue/500 */

            background: #4255BD;
            /* Blue/400 */

            border: 1px solid #6877CA;
            border-radius: 999px;

            font-family: 'General Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 32px;
            /* identical to box height, or 178% */

            text-align: center;
            letter-spacing: 0.04em;

            /* Neutral/White */

            color: #FFFFFF;





        }


`

const Footer = styled.div`

    margin-bottom: 0px;
    box-sizing: border-box;

    width: 100%;
    height: 78px;
    border-top:1px solid #E6E6E6;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin: auto 104px ;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        /* or 133% */

        text-align: center;

        /* Gray/400 */

        color: #999999

        a{
            text-decoration: none;
            color: #999999 !important;
        }
    }




`

export default Form