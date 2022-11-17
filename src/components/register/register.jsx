import React from 'react'
import { StepProgress } from './StepProgress/StepProgress'
import { Step1 } from './form/Step1/Step1'
import { Step2 } from './form/Step2/Step2'
import { Step3 } from './form/Step3/Step3'
import { ProgressControl } from './ProgressControl/ProgressControl'

export function Register () {
  return (
    <>
      <StepProgress/>
      <Step1/>
      <Step2/>
      <Step3/>
      <ProgressControl/>
    </>
  )
}