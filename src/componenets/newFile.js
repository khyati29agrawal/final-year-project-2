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
import Spinner from '../UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

const BasicForm = (props) => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
    if (props.loading) {
        form = <Spinner />
    }
    let redirect = null;
    if (props.redirect) {
        redirect = <Redirect to='/' />
    }
    return (
        <>
            <CRow>
                <CCol xs="12" md="10" className="mx-auto">
                    <CCard>
                        <CCardHeader>
                            Fill the form to upload files
            </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={(event) => {
                                props.onSubmit(event)
                            }
                            } className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Uploader Name</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input"
                                            name="text-input"
                                            placeholder="Uploader Name"
                                            value={props.formData.uploader_name.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'uploader_name')} />
                                    </CCol>
                                </CFormGroup>

                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">File Name</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input"
                                            name="text-input"
                                            placeholder="File Name"
                                            value={props.formData.file_name.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'file_name')} />
                                    </CCol>
                                </CFormGroup>

                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="selectSm">Year</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom size="sm"
                                            name="selectSm"
                                            id="SelectLm"
                                            value={props.formData.year.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'year')}>
                                            <option value="first-year">First Year</option>
                                            <option value="third-sem">Third Sem</option>
                                            <option value="fourth-sem">Fourth Sem</option>
                                            <option value="fifth-sem">Fifth Sem</option>
                                            <option value="sixth-sem">Sixth Sem</option>
                                            <option value="seventh-sem">Seventh Sem</option>
                                            <option value="eighth-sem">Eighth Sem</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="selectSm">Branch</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom size="sm"
                                            name="selectSm"
                                            id="SelectLm"
                                            value={props.formData.subject.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'subject')} 
  >
                                            <option value="computer-science">Computer Science</option>
                                            <option value="information-technology">Information Technology</option>
                                            <option value="electronics-communications">Electronics & Communications</option>
                                            <option value="mechanical-engineering">Mechanical Engineering</option>
                                            <option value="electrical-instrumrntation">Electrical And Instrumrntation</option>
                                            <option value="civil-engineering">Civil Engineering</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="selectSm">Type</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom size="sm"
                                            name="selectSm"
                                            id="SelectLm"
                                            value={props.formData.type.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'type')}
                                 >
                                            <option value="notes">Notes</option>
                                            <option value="books">Books</option>
                                            <option value="papers">Question Papers</option>
                                            <option value="practical">Practicals</option>
                                            <option value="other">Others</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="selectSm">Test</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom size="sm"
                                            name="selectSm"
                                            id="SelectLm"
                                            value={props.formData.test.value}
                                            onChange={(event) => props.inputChangeHandler(event, 'test')}
                                        >
                                            <option value="1 MST">1 MST</option>
                                            <option value="2 MST">2 MST</option>
                                            <option value="END SEM">END SEM</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>

                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input"
                                            name="file-input"

                                            onChange={(event) => props.onFileChange(event)}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CButton type="submit" size="sm" color="primary" className="mr-2" ><CIcon name="cil-scrubber" /> Submit</CButton>
                                <CButton type="reset" size="sm" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>

                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                        </CCardFooter>
                    </CCard>

                </CCol>
            </CRow>

        </>
    )
}

export default BasicForm
