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

const WidgetsDropdown = (props) => {
  const history = useHistory();
  const year = props.params.year;
  // render
  return (
    <>
      <CRow>
      
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="Computer Science"
          // text="Members online"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/computer-science`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/computer-science`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/computer-science`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/computer-science`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/computer-science`}>Other</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="Information Technology"
          // text="Members online"
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
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/information-technology`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/information-technology`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/information-technology`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/information-technology`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/information-technology`}>Other</CDropdownItem>  </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="Electronics & Communication"
          // text="Members online"
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
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/electronics-communications`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/electronics-communications`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/electronics-communications`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/electronics-communications`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/electronics-communications`}>Other</CDropdownItem>   </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          header="Mechanical Engineering"
          // text="Take your first step!"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[51, 55, 40, 65, 59, 84, 86]}
              pointHoverBackgroundColor="success"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/mechanical-engineering`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/mechanical-engineering`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/mechanical-engineering`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/mechanical-engineering`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/mechanical-engineering`}>Other</CDropdownItem> </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

    </CRow>

{/* second row */}
    <CRow>
      
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-dark"
          header="Electrical & Instrumentation"
          // text="Members online"
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
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/electronis-instrumentation`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/electronis-instrumentation`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/electronis-instrumentation`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/electronis-instrumentation`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/electronis-instrumentation`}>Other</CDropdownItem>  </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="Civil Engineering"
          // text="Members online"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-options"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                              <CDropdownItem to={`/users/${year}/notes/civil-engineering`}>Notes</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/paper/civil-engineering`}>Question Papers</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/practical/civil-engineering`}>Practical Material</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/books/civil-engineering`}>Books</CDropdownItem>
                              <CDropdownItem to={`/users/${year}/other/civil-engineering`}>Other</CDropdownItem>   </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

     </CRow>
    </>
  )
}

export default WidgetsDropdown
