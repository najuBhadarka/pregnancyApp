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

const UserList = () => {
  const [page, setPage] = useState(0)
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let userData = useSelector((state) => state?.UserReducer?.userData)

  useEffect(() => {
    dispatch(getUserList({ pageNo: page, limit: rowsPerPage }))
  }, [dispatch])

  const handleDeleteUser = (userId, isDeleted) => {
    dispatch(deleteUser({ id: userId, body: { isDeleted: isDeleted } }))
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

  const filteredUserList = userData?.userList?.filter(item => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
    const firstNameMatch = item.firstName.toLowerCase().includes(searchQuery.toLowerCase());
    const lastNameMatch = item.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    const fullNameMatch = fullName.includes(searchQuery.toLowerCase());
    const emailMatch = item.email.toLowerCase().includes(searchQuery.toLowerCase());
    const contactMatch = (typeof item.contact === 'string' || typeof item.contact === 'number') &&
      item.contact.toString().toLowerCase().includes(searchQuery.toLowerCase());
    const userNameMatch = item.userName.toLowerCase().includes(searchQuery.toLowerCase());

    return firstNameMatch || lastNameMatch || fullNameMatch || emailMatch || contactMatch || userNameMatch;
  });

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
                {filteredUserList && filteredUserList?.length > 0
                  ? filteredUserList?.map((item, index) => (
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
                        <CButton
                          color="link"
                          onClick={() => navigate(`/user/update/${item._id}`)}
                        >
                          <i className="ri-edit-2-line"></i>
                        </CButton>
                        <CButton color="link" onClick={() => handleDeleteUser(item?._id, true)}>
                          <i className="ri-delete-bin-2-fill red"></i>
                        </CButton>
                      </CTableDataCell>{' '}
                    </CTableRow>
                  ))
                  :
                  <>
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell colSpan={7} className='text-center font-weight-bold'>No matching users found</CTableDataCell>
                    </CTableRow>
                  </>
                }
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <TablePagination
          component="div"
          count={userData?.totalUserCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CCol>
    </CRow>
  )
}

export default UserList
