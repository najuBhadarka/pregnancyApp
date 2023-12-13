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
    navigate(`/question/update-form/${id}`)
  }

  const handleDeleteForm = (userId, isDeleted) => {
    dispatch(deleteForm({ id: userId, body: { isDeleted: isDeleted } }))
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4 list-data mt-5">
          <CCardHeader className="t-heading">
            Questionaries List
            <CButton
              component="input"
              type="reset"
              className="mr-1 add-f"
              color="success"
              value="Add Form"
              onClick={() => navigate('/question/create-form')}
            />
          </CCardHeader>
          <div className="searchBar">
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <i className="ri-search-line"></i>
            </button>
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              
            />
           
          </div>
          <CCardBody>
            <CTable align="middle" className="mb-0" responsive>
              <CTableHead className="table-head">
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
                          {/* <CButton
                            component="input"
                            type="reset"
                            className="mr-1"
                            color="primary"
                            value="Edit"
                            onClick={() => editForm(item._id)}
                          /> */}
                          <CButton color="link" onClick={() => editForm(item._id)}>
                            <i className="ri-edit-2-line"></i>
                          </CButton>
                          {/* <CButton
                            component="input"
                            type="reset"
                            color="danger"
                            onClick={() => handleDeleteForm(item?._id, true)}
                            value="Delete"
                          /> */}
                          <CButton color="link" onClick={() => handleDeleteForm(item?._id, true)}>
                            <i className="ri-delete-bin-2-fill red"></i>
                          </CButton>
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
