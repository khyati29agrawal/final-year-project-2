import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CContainer,
    CJumbotron,
    CRow,
    CEmbed,
    CEmbedItem
} from '@coreui/react'

const Team = () => {

    return (
        <>
            <CRow>
                <CCol xs='12' sm='4'>
                    <CCard>
                        <CCardHeader>
                            Jumbotron
              <small> fluid</small>
                        </CCardHeader>
                        <CCardBody>
                            <CJumbotron fluid>
                                <CContainer fluid>
                                    <h1 className="display-3">Fluid jumbotron</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </CContainer>
                            </CJumbotron>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs='12' sm='4'>
                    <CCard>
                        <CCardHeader>
                            Jumbotron
              <small> fluid</small>
                        </CCardHeader>
                        <CCardBody>
                            <CJumbotron fluid>
                                <CContainer fluid>
                                    <h1 className="display-3">Fluid jumbotron</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </CContainer>
                            </CJumbotron>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs='12' sm='4'>
                    <CCard>
                        <CCardHeader>
                            Jumbotron
              <small> fluid</small>
                        </CCardHeader>
                        <CCardBody>
                            <CJumbotron fluid>
                                <CContainer fluid>
                                    <h1 className="display-3">Fluid jumbotron</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </CContainer>
                            </CJumbotron>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Team