import React from 'react'
import SideQuestionSignUp from './SideQuestionSignUp'
import SignUpQuestion from './SignUpQuestion'
const SignUpQuestionContainer = () => {
  return (
    <section className='sign-up-page'>
        <SignUpQuestion />
        <SideQuestionSignUp />
    </section>
  )
}

export default SignUpQuestionContainer
