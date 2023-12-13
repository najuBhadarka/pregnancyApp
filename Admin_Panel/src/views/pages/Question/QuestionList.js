import React, { useEffect, useState } from 'react'
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
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredQuestionsList = questionsList?.filter(item => {
    const fullTitle = item.title.toLowerCase();
    const title = fullTitle.includes(searchQuery.toLowerCase());

    return title
  });

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

          </div>
          <CCardBody>
            <CTable align="middle" className="mb-0" responsive>
              <CTableHead className="table-head">
                <CTableRow>
                  <CTableHeaderCell>Sr. No</CTableHeaderCell>
                  <CTableHeaderCell>Title</CTableHeaderCell>
                  <CTableHeaderCell>Timeline</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredQuestionsList && filteredQuestionsList?.length > 0
                  ? filteredQuestionsList?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{item.title}</CTableDataCell>{' '}
                      <CTableDataCell>{item.timeline}</CTableDataCell>{' '}
                      <CTableDataCell>
                        <CButton color="link" onClick={() => editForm(item._id)}>
                          <i className="ri-edit-2-line"></i>
                        </CButton>
                        <CButton color="link" onClick={() => handleDeleteForm(item?._id, true)}>
                          <i className="ri-delete-bin-2-fill red"></i>
                        </CButton>
                      </CTableDataCell>{' '}
                    </CTableRow>
                  ))
                  :
                  <>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell colSpan={4} className='text-center font-weight-bold'>No matching form found</CTableDataCell>
                    </CTableRow>
                  </>
                }
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default QuestionsList
