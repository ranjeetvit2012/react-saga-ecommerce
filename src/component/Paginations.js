import { Pagination } from 'flowbite-react';

export const Paginations = (props)=>{
         console.log(" hello  ",props)
    return(
        <div>
          <Pagination 
           />
     {/* <Pagination
        currentPage={props?.currentPage}
        layout={props?.layout}
        nextLabel={props?.nextLabel}
        onPageChange={props.onPageChange}
        previousLabel={props?.previousLabel}
        showIcons = {props?.showIcons}
        totalPages={props?.pagesCount}
      /> */}
        </div>
    )
}