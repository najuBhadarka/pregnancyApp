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
import { getQuestionsList, updateForm } from 'src/redux/questionaries/questionariesAction'

const QuestionsList = () => {
  const dispatch = useDispatch()

  const questionsList = useSelector((state) => state?.QuestionariesReducer?.questionsList?.data)
  useEffect(() => {
    dispatch(getQuestionsList())
  }, [dispatch])

  const editForm = (id) => {
    dispatch(updateForm(id))
  }
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Questionaries List</CCardHeader>
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
                          <CButton component="input" type="reset" color="danger" value="Delete" />
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
