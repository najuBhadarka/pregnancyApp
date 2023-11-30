import React, { useEffect, useState } from 'react'
import { FormBuilder } from 'react-formio'
import { useDispatch, useSelector } from 'react-redux'
import { createForm, getForm } from 'src/redux/questionaries/questionariesAction'
import { CButton, CCard, CCol, CRow, CCardHeader } from '@coreui/react'

const QuestionForm = () => {
  const dispatch = useDispatch()
  const singleFormData = useSelector((state) => state?.QuestionariesReducer?.singleForm)

  const [state, setState] = useState({
    formData: {},
    timeline: 2,
  })

  useEffect(() => {
    dispatch(getForm())
  }, [])

  useEffect(() => {
    setState({
      timeline: singleFormData?.timeline,
      title: singleFormData?.title,
    })
  }, [singleFormData])

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleChangeForForm = (schema) => {
    setState((prevState) => ({
      ...prevState,
      questions: JSON.stringify(schema),
    }))
  }

  const handleSubmit = () => {
    dispatch(createForm(state))
  }
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Question Form</CCardHeader>
          <div className="m-3">
            <div className="d-flex m-4 justify-content-around">
              <div className="d-flex">
                <label htmlFor="title" className="m-1">
                  Title:
                </label>
                <input
                  className="form-control"
                  placeholder="Please enter Question Form Name"
                  type="text"
                  name="title"
                  id="title"
                  value={state?.title || ''}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="d-flex">
                <label htmlFor="Timeline" className="m-1">
                  Timeline:
                </label>
                <input
                  className="form-control"
                  placeholder="Please enter the timeline"
                  type="number"
                  name="timeline"
                  id="timeline"
                  value={2}
                  disabled={true}
                />
              </div>
              <CButton color="success" className="px-4" onClick={handleSubmit}>
                Click here to submit
              </CButton>
            </div>
            <FormBuilder form={singleFormData.formData || {}} onChange={handleChangeForForm} />
          </div>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default QuestionForm
