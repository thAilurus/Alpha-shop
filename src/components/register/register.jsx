import React from 'react'
import { StepProgress } from './StepProgress/StepProgress'
import { Form } from './form/Form'

import { ProgressControl } from './ProgressControl/ProgressControl'

export function Register () {
  return (
    <>
      <StepProgress/>
      <Form/>
      <ProgressControl/>
    </>
  )
}