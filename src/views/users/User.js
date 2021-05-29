import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'
import axios from 'axios'
import usersData from './UsersData'
import download from 'downloadjs';
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const downloadFile =async (id, path) => {
    console.log(id)
    try {
        const url = 'http://127.0.0.1:8000';
        const result = await axios.get(`${url}/download/${id}`, {
            responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];
        return download(result.data, filename);
    } catch (error) {
        if (error.response && error.response.status === 400) {
           console.log('Error while downloading file. Try again later');
        }
    }
};

const User = (props) => {
    console.log(props.fileName.match.params.year)
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const pageChange = newPage => {
      currentPage !== newPage && history.push(`/users/${props.fileName.match.params.year}/${props.fileName.match.params.type}/${props.fileName.match.params.subject}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])
    if (props.fileName.fetch.error) {
        return <div>Error! {props.fileName.fetch.error.message}</div>;
    }

    if (props.fileName.fetch.loading) {
        return <div>Loading...</div>;
    }

    return (
            <CRow>
                <CCol xl={6}>
                    <CCard>
                        <CCardHeader>
                            Users
            <small className="text-muted"> example</small>
                        </CCardHeader>
                        <CCardBody>
                        <CDataTable
                            items={props.fileName.fetch.books}
                            fields={[
                                { key: 'userName', _classes: 'font-weight-bold' },
                                'fileName'
                                , 'test',
                                'filePath'
                            ]}
                            hover
                            striped
                            itemsPerPage={5}
                            activePage={page}
                            scopedSlots={{
                                'filePath':
                                    (item) => (
                                        <td>
                                            <a
                                                href="#/"
                                                onClick={() =>
                                                    downloadFile(item._id,item.filePath)
                                                }
                                            >
                                                Download
                    </a>   </td>
                                    )
                            }}
                            />
                            <CPagination
                                activePage={page}
                                onActivePageChange={pageChange}
                                pages={5}
                                doubleArrows={false}
                                align="center"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        )
    }

export default User