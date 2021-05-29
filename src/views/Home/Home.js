import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdownHome = lazy(() => import('../widgets/WidgetsDropdownHome.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Home = () => {
  return (
    <>
      <WidgetsDropdownHome /> 
      
    </>
  )
}

export default Home
