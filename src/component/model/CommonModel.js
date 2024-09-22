
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import { userUpdateRequestAction } from '../../redux/action/userAction';
import * as yup from "yup"
export const CommonModel = (props)=>{
    return(
        <div>
      <Modal show={props.openModal === 'pop-up'} 
      size="md"
       popup 
      onClose={() => props.handelClose(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle 
             className="mx-auto mb-4 h-14 w-14 
             text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure"
               onClick={() => props.confirmAction(props.id)}>
                Yes, I'm sure
              </Button>
              <Button color="gray"
               onClick={() => props.handelClose(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

        </div>
    )
}


export const UserEditModel = (props)=>{
      //console.log(" UserEditModel ",props.data)
  //const [openModal, setOpenModal] = useState();
  //const emailInputRef = useRef<HTMLInputElement>(null)
   const dispatch = useDispatch();
   const validationSchema = yup.object({
     name:yup.string("Enter Name").required("Name is required"),
     email:yup.string("Enter Email").required("email is required").email("Enter valid email"),
     mobile:yup.number("Enter Mobile Number").required("Mobile is required")
   })
   const initialValues = {
    name: props?.data?.name,
    email:props?.data?.email,
    mobile:props?.data?.mobile,
    
  };


   const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    values['id'] = props.data?._id;
     dispatch(userUpdateRequestAction(values))
     props.handelClose()
    
    // Reset the form after submission if needed
    resetForm();
  };


 

  return(
    <>
   
    <Modal
      show={props.openModal === 'initial-focus'}
      size="md"
      popup
      onClose={() => props.handelClose()}
      
    >
      <Modal.Header />
      <Modal.Body>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <div className="space-y-6">
          <h3 className="text-xl
           font-medium text-gray-900 dark:text-white"
           >User Update</h3>
           <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <Field type="text" id="name"
             name="name"
             className="block w-full border
             disabled:cursor-not-allowed
              disabled:opacity-50 bg-gray-50 
              border-gray-300 text-gray-900 
              focus:border-cyan-500 focus:ring-cyan-500
               dark:border-gray-600 dark:bg-gray-700 
               dark:text-white dark:placeholder-gray-400
                dark:focus:border-cyan-500
                 dark:focus:ring-cyan-500 p-2.5 text-sm
                  rounded-lg"
              />
           
          </div>
          <ErrorMessage name="name" component="div" className="error" />
           
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <Field type="text" id="name" name="email"
            className="block w-full border
             disabled:cursor-not-allowed
              disabled:opacity-50 bg-gray-50 
              border-gray-300 text-gray-900 
              focus:border-cyan-500 focus:ring-cyan-500
               dark:border-gray-600 dark:bg-gray-700 
               dark:text-white dark:placeholder-gray-400
                dark:focus:border-cyan-500
                 dark:focus:ring-cyan-500 p-2.5 text-sm
                  rounded-lg"
             />
           
          </div>
          <ErrorMessage name="email" component="div" className="error" />
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mobile" value="Your mobile" />
            </div>
            <Field type="text" id="name"
             name="mobile"
             className="block w-full border
             disabled:cursor-not-allowed
              disabled:opacity-50 bg-gray-50 
              border-gray-300 text-gray-900 
              focus:border-cyan-500 focus:ring-cyan-500
               dark:border-gray-600 dark:bg-gray-700 
               dark:text-white dark:placeholder-gray-400
                dark:focus:border-cyan-500
                 dark:focus:ring-cyan-500 p-2.5 text-sm
                  rounded-lg"
              />
            
          </div>
          <ErrorMessage name="mobile" component="div" className="error" />
          
          <div className="flex justify-between">
           
           
          </div>
          <div className="w-full">
            <Button type="submit">Update</Button>
          </div>
          
        </div>
        </Form>
       
        
        </Formik>
      </Modal.Body>
    </Modal>
  </>
  )
}