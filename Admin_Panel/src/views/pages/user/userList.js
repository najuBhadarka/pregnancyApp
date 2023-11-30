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
import { getUserList } from 'src/redux/user/userAction'

const UserList = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state?.UserReducer?.userData)
  console.log('🚀 ~ file: userList.js:40 ~ UserList ~ data:', userList)
  useEffect(() => {
    dispatch(getUserList())
  }, [])

  const handleStatus = () => {}
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>User List</CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
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
                {userList && userList?.length > 0
                  ? userList?.map((item, index) => (
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
                            color={item.status == 'active' ? 'danger' : 'success'}
                            value={item.status == 'active' ? 'InActive' : 'Active'}
                            onClick={handleStatus}
                          />
                        </CTableDataCell>{' '}
                        <CTableDataCell>
                          <CButton
                            component="input"
                            type="reset"
                            className="mr-1"
                            color="primary"
                            value="Edit"
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

export default UserList
