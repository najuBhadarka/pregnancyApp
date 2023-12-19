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
import { deleteUser, getUserList, updateUserStatus } from '../../../redux/user/userAction'
import { useNavigate } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination'
import ConfirmationDialog from 'src/components/ConfirmationPopUp'

const UserList = () => {
  const [page, setPage] = useState(0)
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState({
    isOpen: false,
    userId: '',
    isDeleted: false,
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let userData = useSelector((state) => state?.UserReducer?.userList)
  let totalUserCount = useSelector((state) => state?.UserReducer?.totalUserCount)
  useEffect(() => {
    dispatch(getUserList({ pageNo: page, limit: rowsPerPage }))
  }, [dispatch, page, rowsPerPage])

  const handleOpenConfirmationDialog = (userId, isDeleted) => {
    setConfirmationDialogOpen({ isOpen: true, userId: userId, isDeleted: isDeleted })
  }

  const handleCloseConfirmationDialog = () => {
    setConfirmationDialogOpen({ isOpen: false })
  }

  const handleConfirmAction = () => {
    // Your logic for confirmation action
    console.log('Confirmed!')
    dispatch(
      deleteUser({
        id: isConfirmationDialogOpen.userId,
        body: { isDeleted: isConfirmationDialogOpen.isDeleted },
      }),
    )
    handleCloseConfirmationDialog()
  }

  const handleUpdateState = (e, id) => {
    dispatch(
      updateUserStatus({
        body: { status: e.target.value },
        ids: id,
      }),
    )
  }

  const handleChangePage = (event, newPage) => {
    dispatch(getUserList({ pageNo: newPage, limit: rowsPerPage }))
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    dispatch(getUserList({ pageNo: 0, limit: parseInt(event.target.value, 10) }))
    setPage(0)
  }

  const filteredUserList = userData?.filter((item, index) => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase()
    const firstNameMatch = item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    const lastNameMatch = item.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    const fullNameMatch = fullName.includes(searchQuery.toLowerCase())
    const emailMatch = item.email.toLowerCase().includes(searchQuery.toLowerCase())
    const contactMatch =
      (typeof item.contact === 'string' || typeof item.contact === 'number') &&
      item.contact.toString().toLowerCase().includes(searchQuery.toLowerCase())
    const userNameMatch = item.userName.toLowerCase().includes(searchQuery.toLowerCase())
    return (
      firstNameMatch ||
      lastNameMatch ||
      fullNameMatch ||
      emailMatch ||
      contactMatch ||
      userNameMatch
    )
  })
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4 list-data mt-5">
          <CCardHeader className="t-heading">User List</CCardHeader>

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
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>Contact</CTableHeaderCell>
                  <CTableHeaderCell>Username</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredUserList && filteredUserList?.length > 0 ? (
                  filteredUserList?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>
                        {item.firstName} {item.lastName}
                      </CTableDataCell>{' '}
                      <CTableDataCell>{item.email}</CTableDataCell>{' '}
                      <CTableDataCell>{item.contact}</CTableDataCell>{' '}
                      <CTableDataCell>{item.userName}</CTableDataCell>{' '}
                      <CTableDataCell>
                        <CButton
                          component="input"
                          type="reset"
                          color={item.status === 'active' ? 'danger' : 'success'}
                          className="status-btn"
                          value={item?.status === 'active' ? 'inactive' : 'active'}
                          onClick={(e) => handleUpdateState(e, item?._id)}
                        />
                      </CTableDataCell>{' '}
                      <CTableDataCell>
                        <CButton color="link" onClick={() => navigate(`/user/update/${item._id}`)}>
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
                          onClick={() => handleOpenConfirmationDialog(item._id, true)}
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
                      <CTableDataCell colSpan={7} className="text-center font-weight-bold">
                        No matching users found
                      </CTableDataCell>
                    </CTableRow>
                  </>
                )}
              </CTableBody>
            </CTable>
            <TablePagination
              component="div"
              count={totalUserCount && totalUserCount !== 0 ? totalUserCount : 0}
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

export default UserList
