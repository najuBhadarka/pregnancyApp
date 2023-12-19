import { CButton, CCardHeader } from '@coreui/react'
import React from 'react'
import { useEffect } from 'react'
import { Form } from 'react-formio'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getAnswerListById } from 'src/redux/questionaries/questionariesAction'

const PreviewAnwserSheet = () => {
  let parseFormData
  let parseSubmission
  const answerSheet = useSelector((state) => state?.QuestionariesReducer?.singleAnswerForm)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  if (answerSheet && answerSheet?.answer?.formData) {
    parseFormData = JSON.parse(answerSheet?.answer?.formData)
    parseSubmission = JSON.parse(answerSheet?.answer?.submission)
  }

  useEffect(() => {
    dispatch(getAnswerListById(id))
  }, [id, dispatch])

  return (
    <>
      <CCardHeader className="t-heading">
        Answer Form
        <CButton
          component="input"
          type="reset"
          className="mr-1 add-f"
          color="success"
          value="Back"
          onClick={() => navigate('/question/result-list')}
        />
      </CCardHeader>
      <div className="d-flex justify-content-evenly mb-4">
        <h3 className="text-center">
          Title: <span className="text-info">{answerSheet?.title}</span>
        </h3>
        <h3 className="text-center">
          Timeline: <span className="text-info">{answerSheet?.timeline}</span>
        </h3>
      </div>
      <Form form={parseFormData} submission={parseSubmission} />
    </>
  )
}

export default PreviewAnwserSheet
