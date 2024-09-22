import { Table,Tooltip  } from 'flowbite-react';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { LoderSpinner } from '../../utils/Utils';
import { userDeleteRequestAction, userClearState,userListActionRequest } from '../../redux/action/userAction';
import { Pagination } from 'flowbite-react';
import { FaTrash,FaPenToSquare } from "react-icons/fa6";
import { CommonModel,UserEditModel } from '../model/CommonModel';
const UserList = ()=>{
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state.user);
    const pagesCount= useSelector((state)=>state.user?.pagesCount);
   //console.log(" pagesCount user list ",pagesCount)
    const loader = useSelector((state)=>state.user.loader);
    const status = useSelector((state)=>state.user.status);
    //console.log(" status --------",status)
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setShow] = useState();
    const [delteId, setDelete] = useState();
    const [userEditData,setUserEdit] = useState();
    const onPageChange = (page) => setCurrentPage(page);
       
        useEffect(()=>{

        dispatch(userListActionRequest(currentPage))
     },[currentPage])
     if(status==200){
      dispatch(userClearState())
      dispatch(userListActionRequest(currentPage))
     }
     const handleEdit = (id)=>{
        const [userEditData] = userData?.data 
        && userData?.data?.filter((data)=>data._id==id);
        setUserEdit(userEditData)
        setShow('initial-focus')
     }

     const handleDelete = (id)=>{
        setShow('pop-up')
        setDelete(id)
     }

     const handelClose =()=>{
      setShow('')
     }

     const confirmAction = (id)=>{
      dispatch(userDeleteRequestAction(id))
      setShow('')
     }

    //  const confirmUpdateAction = ()=>{
    //   console.log("confirmUpdateAction ");
    //   setShow('')
    //  }

     

   return(
    <>
    
  <div class="max-w-sm w-full bg-white dark:bg-gray-800 p-4 md:p-6" 
  style={{ marginLeft:265,marginTop:-380}}>
  <h4 class="text-2xl font-bold dark:text-white">User List</h4>
  
   {loader ? <LoderSpinner/>:
        <Table>
          <UserEditModel
           openModal = {openModal}
           data = {userEditData}
           //confirmUpdateAction = {confirmUpdateAction}
            handelClose={handelClose}
            />
      <Table.Head>
        <Table.HeadCell>
           name
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          mobile
        </Table.HeadCell>
        <Table.HeadCell>Action
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {userData?.data.length>0 && userData?.data.map((data)=>(
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {data.name}
          </Table.Cell>
          <Table.Cell>
           {data.email}
          </Table.Cell>
          <Table.Cell>
           {data.mobile}
          </Table.Cell>
        
          <Table.Cell>
          <Tooltip
        content="Edit"
        style="dark"
      >
        <span className="font-medium text-cyan-600
             hover:underline dark:text-cyan-500"
              onClick={()=>{handleEdit(data._id)}}>

              <FaPenToSquare />
            </span>
      </Tooltip>
            &nbsp;
            <Tooltip
        content="Delete"
        style="dark"
      >
        <span className="font-medium text-cyan-600
             hover:underline dark:text-cyan-500"
              onClick={()=>{handleDelete(data._id)}} >
              <FaTrash />
            </span>
      </Tooltip>
            
          </Table.Cell>
        </Table.Row>
        ))}
        
        
        
      </Table.Body>
      <CommonModel   openModal={openModal}
       id={delteId}
       handelClose= {handelClose}
       confirmAction = {confirmAction}
        /> 
     
      <Pagination
        currentPage={currentPage}
        layout="pagination"
        nextLabel="Go forward"
        onPageChange={page=>{setCurrentPage(page)}}
        previousLabel="Go back"
        showIcons
        totalPages={pagesCount}
      />
    </Table>
    
    }
    </div>
   
    </>
   )
}

export default UserList