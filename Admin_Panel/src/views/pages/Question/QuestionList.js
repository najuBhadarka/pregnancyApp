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
import ConfirmationDialog from 'src/components/ConfirmationPopUp'

const QuestionsList = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState({
    isOpen: false,
    formId: '',
    isDeleted: false,
  })
  const questionsData = useSelector((state) => state?.QuestionariesReducer?.questionsList)
  const questionsCount = useSelector((state) => state?.QuestionariesReducer?.questionsCount)
  useEffect(() => {
    dispatch(getQuestionsList({ pageNo: page, limit: rowsPerPage }))
  }, [dispatch, page, rowsPerPage])

  const editForm = (id) => {
    navigate(`/question/update-form/${id}`)
  }

  const handleOpenConfirmationDialog = (formId, isDeleted) => {
    setConfirmationDialogOpen({ isOpen: true, formId: formId, isDeleted: isDeleted })
  }

  const handleCloseConfirmationDialog = () => {
    setConfirmationDialogOpen({ isOpen: false })
  }

  const handleConfirmAction = () => {
    // Your logic for confirmation action
    console.log('Confirmed!')
    dispatch(
      deleteForm({
        id: isConfirmationDialogOpen.formId,
        body: { isDeleted: isConfirmationDialogOpen.isDeleted },
      }),
    )
    handleCloseConfirmationDialog()
  }

  const filteredQuestionsList = questionsData?.filter((item) => {
    const fullTitle = item.title.toLowerCase()
    const title = fullTitle.includes(searchQuery.toLowerCase())

    return title
  })

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
                {filteredQuestionsList && filteredQuestionsList?.length > 0 ? (
                  filteredQuestionsList?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{item.title}</CTableDataCell>{' '}
                      <CTableDataCell>{item.timeline}</CTableDataCell>{' '}
                      <CTableDataCell>
                        <CButton color="link" onClick={() => editForm(item._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                          >
                            <path
                              d="M9.07852 2.44295H4.52932C3.02185 2.44295 1.7998 3.66496 1.7998 5.17238V14.2706C1.7998 15.778 3.02185 17 4.52932 17H13.6277C15.1352 17 16.3572 15.778 16.3572 14.2706L16.3572 9.72148M6.349 12.4509L9.65929 11.7839C9.83502 11.7485 9.99638 11.6619 10.1231 11.5352L17.5335 4.12093C17.8888 3.76546 17.8885 3.18925 17.533 2.83408L15.9632 1.26611C15.6077 0.911085 15.0318 0.911327 14.6766 1.26665L7.26548 8.68165C7.13901 8.80819 7.05264 8.96921 7.0172 9.14458L6.349 12.4509Z"
                              stroke="#435E9B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </CButton>
                        <CButton
                          color="link"
                          onClick={() => handleOpenConfirmationDialog(item?._id, true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M4.6001 6.17647H20.6001M10.6001 16.7647V10.4118M14.6001 16.7647V10.4118M16.6001 21H8.6001C7.49553 21 6.6001 20.0519 6.6001 18.8824V7.23529C6.6001 6.65052 7.04781 6.17647 7.6001 6.17647H17.6001C18.1524 6.17647 18.6001 6.65052 18.6001 7.23529V18.8824C18.6001 20.0519 17.7047 21 16.6001 21ZM10.6001 6.17647H14.6001C15.1524 6.17647 15.6001 5.70242 15.6001 5.11765V4.05882C15.6001 3.47405 15.1524 3 14.6001 3H10.6001C10.0478 3 9.6001 3.47405 9.6001 4.05882V5.11765C9.6001 5.70242 10.0478 6.17647 10.6001 6.17647Z"
                              stroke="#ED0000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </CButton>
                      </CTableDataCell>{' '}
                    </CTableRow>
                  ))
                ) : (
                  <>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell colSpan={4} className="text-center font-weight-bold">
                        No matching form found
                      </CTableDataCell>
                    </CTableRow>
                  </>
                )}
              </CTableBody>
            </CTable>
            <TablePagination
              component="div"
              count={questionsCount === undefined ? 0 : questionsCount}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className="pagenation-s pt-3"
            />
            <div>
              <ConfirmationDialog
                open={isConfirmationDialogOpen?.isOpen}
                onClose={handleCloseConfirmationDialog}
                onConfirm={handleConfirmAction}
                title="Confirmation"
                content="Are you sure you want to perform this action?"
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default QuestionsList
