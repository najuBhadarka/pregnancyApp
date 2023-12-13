import React from 'react'

export const TableComponent = (props) => {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4 list-data mt-5">
          <CCardHeader className="t-heading">
            {props.title}
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
                {props?.data && props?.data?.length > 0
                  ? props?.data?.map((item, index) => (
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
      </CCol>
    </CRow>
  )
}
