import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { useHistory } from 'react-router'

const WidgetsDropdownHome = () => {
    const history = useHistory();
  // render
  return (
    <>
      <CRow>
              <CCol sm="6" lg="3">
                  <CWidgetDropdown
                      color="gradient-info"
                      header="First Year"
                      // text="Members online"
                      onClick={(item) => history.push(`/dashboard/first-year`)}
                      style={{ cursor: 'pointer' }}
                      footerSlot={
                          <ChartLineSimple
                              pointed
                              className="mt-3 mx-3"
                              style={{ height: '70px' }}
                              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                              pointHoverBackgroundColor="info"
                              options={{ elements: { line: { tension: 0.00001 } } }}
                              label="Members"
                              labels="months"
                          />
                      }
                  >
                  </CWidgetDropdown>
              </CCol>
 
 
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="Third Sem"
          // text="Members online"
          onClick={(item) => history.push(`/dashboard/third-sem`)}
          style={{cursor: 'pointer'}}
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="Fourth Sem"
          // text="Members online"
          onClick={(item) => history.push(`/dashboard/fourth-sem`)}
          style={{cursor: 'pointer'}}
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
              </CCol>
              <CCol sm="6" lg="3">
                  <CWidgetDropdown
                      color="gradient-success"
                      header="Fifth Sem"
                      // text="Take your first step!"
                      onClick={(item) => history.push(`/dashboard/fifth-sem`)}
                      style={{ cursor: 'pointer' }}
                      footerSlot={
                          <ChartLineSimple
                              pointed
                              className="c-chart-wrapper mt-3 mx-3"
                              style={{ height: '70px' }}
                              dataPoints={[51, 55, 40, 65, 59, 84, 86]}
                              pointHoverBackgroundColor="success"
                              label="Members"
                              labels="months"
                          />
                      }
                  >
                  </CWidgetDropdown>
              </CCol>


    </CRow>

{/* second row */}
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-dark"
          header="Sixth Sem"
          // text="Members online"
          onClick={(item) => history.push(`/dashboard/sixth-sem`)}
          style={{cursor: 'pointer'}}
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="dark"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
              </CCol>

              <CCol sm="6" lg="3">
                  <CWidgetDropdown
                      color="gradient-dark"
                      header="Seventh Sem"
                      // text="Members online"
                      onClick={(item) => history.push(`/dashboard/seventh-sem`)}
                      style={{ cursor: 'pointer' }}
                      footerSlot={
                          <ChartLineSimple
                              pointed
                              className="mt-3 mx-3"
                              style={{ height: '70px' }}
                              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                              pointHoverBackgroundColor="dark"
                              options={{ elements: { line: { tension: 0.00001 } } }}
                              label="Members"
                              labels="months"
                          />
                      }
                  >
                  </CWidgetDropdown>
              </CCol>

              <CCol sm="6" lg="3">
                  <CWidgetDropdown
                      color="gradient-dark"
                      header="Eighth Sem"
                      // text="Members online"
                      onClick={(item) => history.push(`/dashboard/Eighth-sem`)}
                      style={{ cursor: 'pointer' }}
                      footerSlot={
                          <ChartLineSimple
                              pointed
                              className="mt-3 mx-3"
                              style={{ height: '70px' }}
                              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                              pointHoverBackgroundColor="dark"
                              options={{ elements: { line: { tension: 0.00001 } } }}
                              label="Members"
                              labels="months"
                          />
                      }
                  >
                  </CWidgetDropdown>
              </CCol>
    </CRow>
    </>
  )
}

export default WidgetsDropdownHome
