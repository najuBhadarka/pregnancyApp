import React, { useEffect, useState } from 'react'
import { FormBuilder } from 'react-formio'
import { useDispatch, useSelector } from 'react-redux'
import { createForm, getFormById, updateForm } from 'src/redux/questionaries/questionariesAction'
import { CButton, CCard, CCol, CRow, CCardHeader } from '@coreui/react'
import { useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const QuestionForm = ({ mode }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const singleFormData = useSelector((state) => state?.QuestionariesReducer?.singleForm)

  const navigate = useNavigate()

  const [state, setState] = useState({
    formData: {},
    timeline: 0,
  })

  useEffect(() => {
    if (mode === 'update') {
      dispatch(getFormById(id))
    }
  }, [dispatch, mode, id])

  useEffect(() => {
    if (mode === 'update') {
      setState({
        timeline: singleFormData?.timeline,
        title: singleFormData?.title,
        formData: singleFormData?.formData,
      })
    }
  }, [singleFormData, mode])

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
    if (mode === 'update') {
      dispatch(
        updateForm({
          state,
          id: id,
          callBack: () => {
            navigate('/indaco/admin/question/questions-list')
          },
        }),
      )
    } else {
      dispatch(
        createForm({
          state,
          callBack: () => {
            navigate('/indaco/admin/question/questions-list')
          },
        }),
      )
    }
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
                  value={state?.timeline || 0}
                  onChange={handleChange}
                />
              </div>
              <CButton color="success" className="px-4" onClick={handleSubmit}>
                Click here to {mode === 'update' ? 'Update' : 'Create'}
              </CButton>
            </div>
            <FormBuilder form={state?.formData || {}} onChange={handleChangeForForm} />
          </div>
        </CCard>
      </CCol>
    </CRow>
  )
}

QuestionForm.propTypes = {
  mode: PropTypes.string,
}

export default QuestionForm
