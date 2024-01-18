import { Card, Container, Table, Pagination, Spinner, Badge, Image } from "react-bootstrap"

import Breadcrumb from "../../../component/cms/breadcrumb/breadcrumb.component"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import bannerSvc from "./banner.service"
import { Heading } from "../../../component/common/heading.component"

import TablePagination from "../../../component/common/pagination/pagination.component"

const BannerList = () =>{
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState()
  
    const listBanners = async ({page=1,search="", limit=5}) => {
      try {
        setLoading(true)
        const response = await bannerSvc.bannerLists({page, search, limit})
        setData(response.result)
        setPagination({
          ...response.meta,
          pages: (Math.ceil(response.meta.total/response.meta.limit))
        })
      } catch(exception) {
        console.log(exception)
        toast.error(exception.message)
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {
        // api consume 
          listBanners({page:1})
      }, [])
      console.log(pagination)
    return (
        <>
        <Container fluid className="px-4">
            <Heading type={"h1"} className="mt-4" value={"Banner List"}></Heading>
            <Breadcrumb data={[{title:"Dashboard",link:"/admin"},{title:"Banner List",link:null}]}/>
            <Card className="mb-4">
                <Card.Header>
                <Heading type={"h4"} className={"float-start"} value={"Banner List"}></Heading>
              <NavLink className={"btn btn-sm btn-success float-end"} to="/admin/banner/create">
                <i className="fa fa-plus"></i>&nbsp;Add Banner
              </NavLink>
                </Card.Header>
                <Card.Body>
                <Table size="sm" bordered hover striped>
                <thead className="table-dark">
                  <tr>
                    <th>Title</th>
                    <th>Link</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    loading ? <tr>
                    <td colSpan={5}  className="text-center">
                      <Spinner variant="dark"></Spinner>
                    </td>
                  </tr> : (

                      data ? <>
                        {
                          data.map((row, ind) => (
                            <tr key={ind}>
                              <td>{row.title}</td>
                              <td>
                                <a target="_banner" href={row.url}>
                                  {row.url}
                                </a>
                              </td>
                              <td>
                                <Image onError={(e) => {
                                  e.target.src="https://dummyimage.com/50x30/f2f2f2/000000&text=No+image+found"
                                }} style={{maxWidth: "50px"}} fluid src={import.meta.env.VITE_IMAGE_URL+'/banner/'+row.image} />
                              </td>
                              <td>
                                <Badge bg={`${row.status === 'active'? 'success' : 'danger'}`}>
                                  {row.status}
                                </Badge>
                              </td>
                              <td>
                                <NavLink to={'/admin/banner/'+row._id} className={"btn btn-sm btn-warning rounded-circle me-1"}>
                                  <i className="fa fa-pen text-white"></i>
                                </NavLink>
                                <NavLink to={'/admin/banner/'+row._id} className={"btn btn-sm btn-danger rounded-circle me-1"}>
                                  <i className="fa fa-trash text-white"></i>
                                </NavLink>
                              </td>
                            </tr>
                          ))
                        }
                      </> : <tr>
                      <td colSpan={5}  className="text-center">
                        No data found
                      </td>
                    </tr>                    
                  )
                  }
                </tbody>
              </Table>
                
            
              <TablePagination
                pagination={pagination}
                dataFetch={listBanners}
              />
                </Card.Body>
            </Card>
        </Container>
       
                            
        </>
    )
}
export default BannerList;