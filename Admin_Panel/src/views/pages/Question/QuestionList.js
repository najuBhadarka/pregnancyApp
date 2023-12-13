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
import TablePagination from '@mui/material/TablePagination'

const QuestionsList = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('');

  const questionsData = useSelector((state) => state?.QuestionariesReducer?.questionsList)
  useEffect(() => {
    dispatch(getQuestionsList({ pageNo: page, limit: rowsPerPage }))
  }, [dispatch])

  const editForm = (id) => {
    navigate(`/question/update-form/${id}`)
  }

  const handleDeleteForm = (userId, isDeleted) => {
    dispatch(deleteForm({ id: userId, body: { isDeleted: isDeleted } }))
  }

  const filteredQuestionsList = questionsData?.data?.filter(item => {
    const fullTitle = item.title.toLowerCase();
    const title = fullTitle.includes(searchQuery.toLowerCase());

    return title
  });

  const handleChangePage = (event, newPage) => {
    dispatch(getQuestionsList({ pageNo: newPage, limit: rowsPerPage }))
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    dispatch(getQuestionsList({ pageNo: 0, limit: parseInt(event.target.value, 10) }))
    setPage(0)
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
        <TablePagination
          component="div"
          count={questionsData?.questionsCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CCol>
    </CRow>
  )
}

export default QuestionsList
