import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" md="10" className="mx-auto">
          <CCard>
            <CCardHeader>
              Fill the form to get in touch
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="fullname">Full Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="fullname" name="fullname" placeholder="Enter Full Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email">Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="subject">Subject</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="subject" name="subject" placeholder="Enter Subject" autoComplete="subject" />
                    </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="message">Message</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="message" 
                      id="message" 
                      rows="6"
                      placeholder="Your message..." 
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
      </CRow>
      
    </>
  )
}

export default BasicForms
