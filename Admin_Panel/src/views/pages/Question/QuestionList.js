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
import TablePagination from '@mui/material/TablePagination'

const QuestionsList = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" />
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
                {questionsData?.data && questionsData?.data?.length > 0
                  ? questionsData?.data?.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>{item._id}</CTableDataCell>
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
                  : null}
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
