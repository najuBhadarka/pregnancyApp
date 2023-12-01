import React, { useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteForm, getQuestionsList } from '../../../redux/questionaries/questionariesAction'
import { useNavigate } from 'react-router-dom'

const QuestionsList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const questionsList = useSelector((state) => state?.QuestionariesReducer?.questionsList)
  useEffect(() => {
    dispatch(getQuestionsList())
  }, [dispatch])

  const editForm = (id) => {
    navigate(`/indaco/admin/question/update-form/${id}`)
  }

  const handleDeleteForm = (userId, isDeleted) => {
    dispatch(deleteForm({ id: userId, body: { isDeleted: isDeleted } }))
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>
            Questionaries List
            <CButton
              component="input"
              type="reset"
              className="mr-1"
              color="success"
              value="Add Form"
              onClick={() => navigate('/indaco/admin/question/create-form')}
            />
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Title</CTableHeaderCell>
                  <CTableHeaderCell>Timeline</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {questionsList && questionsList?.length > 0
                  ? questionsList?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{item._id}</CTableDataCell>
                      <CTableDataCell>{item.title}</CTableDataCell>{' '}
                      <CTableDataCell>{item.timeline}</CTableDataCell>{' '}
                      <CTableDataCell>
                        <CButton
                          component="input"
                          type="reset"
                          className="mr-1"
                          color="primary"
                          value="Edit"
                          onClick={() => editForm(item._id)}
                        />
                        <CButton
                          component="input"
                          type="reset"
                          color="danger"
                          onClick={() => handleDeleteForm(item?._id, true)}
                          value="Delete"
                        />
                      </CTableDataCell>{' '}
                    </CTableRow>
                  ))
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default QuestionsList
