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
import { deleteUser, getUserList, updateUserStatus } from '../../../redux/user/userAction'
import { useNavigate } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination'

const UserList = () => {
  const [page, setPage] = React.useState(0)
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

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4 list-data mt-5">
          <CCardHeader className="t-heading">User List</CCardHeader>

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
                  <CTableHeaderCell>Profile</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>Contact</CTableHeaderCell>
                  <CTableHeaderCell>Username</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {userData?.userList && userData?.userList?.length > 0
                  ? userData?.userList?.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>{item._id}</CTableDataCell>
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
                          {/* <CButton
                            color={item.status === 'active' ? 'danger' : 'success'}
                            value={item?.status === 'active' ? 'inactive' : 'active'}
                            onClick={(e) => handleUpdateState(e, item?._id)}
                          >
                           
                          </CButton> */}
                        </CTableDataCell>{' '}
                        <CTableDataCell>
                          {/* <CButton
                            component="input"
                            type="reset"
                            className="mr-1"
                            color="primary"
                            value="Edit"
                            onClick={() => navigate(`/user/update/${item._id}`)}
                          /> */}
                          <CButton
                            color="link"
                            onClick={() => navigate(`/user/update/${item._id}`)}
                          >
                            <i className="ri-edit-2-line"></i>
                          </CButton>
                          {/* <CButton
                            component="input"
                            type="reset"
                            color="danger"
                            value="Delete"
                            onClick={() => handleDeleteUser(item?._id, true)}
                          /> */}
                          <CButton color="link" onClick={() => handleDeleteUser(item?._id, true)}>
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
