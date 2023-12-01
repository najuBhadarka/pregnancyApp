import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById, updateUser } from '../../../redux/user/userAction'

const initialState = {
  firstName: '',
  lastName: '',
  contact: '',
  userName: '',
  email: '',
  DOB: '',
  password: '',
}

const UserAdd = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state?.UserReducer?.userDetails)
  const [initFormData, setInitFormData] = useState(initialState)

  useEffect(() => {
    if (props?.mode === 'Update' && id) {
      dispatch(getUserById(id))
      setInitFormData(userDetails)
    }
  }, [dispatch, id, props?.mode, userDetails?.firstName, userDetails])

  const handleChange = (e) => {
    const { name, value } = e.target
    setInitFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    if (props?.mode === 'Update' && id) {
      const updatedUserData = {
        firstName: initFormData.firstName,
        lastName: initFormData.lastName,
        DOB: initFormData.DOB,
        contact: initFormData.contact,
      }
      dispatch(
        updateUser({
          body: updatedUserData,
          id: id,
          callBack: () => {
            navigate('/indaco/admin/user/user-list')
          },
        }),
      )
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{props?.mode} User</strong>
          </CCardHeader>
          <CCardBody>
            <CInputGroup className="mb-3">
              <CInputGroupText id="inputGroup-sizing-default">First Name</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="firstName"
                onChange={handleChange}
                value={initFormData?.firstName}
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText id="inputGroup-sizing-default">Last Name</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="lastName"
                value={initFormData?.lastName}
                onChange={handleChange}
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText id="inputGroup-sizing-default">Date of Birth</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="DOB"
                type="date"
                onChange={handleChange}
                value={initFormData?.DOB}
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText id="inputGroup-sizing-default">Contact</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="contact"
                onChange={handleChange}
                value={initFormData?.contact}
              />
            </CInputGroup>
            <CButton
              component="input"
              className="mr-1"
              type="reset"
              onClick={handleSubmit}
              color="success"
              value={props?.mode === 'Update' ? 'Update' : 'Add'}
            />
            <CButton
              component="input"
              type="reset"
              color="danger"
              value="Cancel"
              onClick={() => navigate('/indaco/admin/user/user-list')}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
UserAdd.propTypes = {
  mode: PropTypes.string,
}

export default UserAdd
