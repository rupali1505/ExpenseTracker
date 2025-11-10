import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({updatePage,currentPage,totalPages}){

    const handlePrev =()=>{
        if(currentPage>1){
            updatePage(prev=>prev-1)
        }
    }
     const handleNext =()=>{
        if(totalPages != currentPage){
            updatePage(prev=>prev+1)
        }
    }

    return(
        <div style={{display:"flex",
            gap:'5px',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <button onClick={handlePrev} disabled={currentPage == 1}>
             <IoIosArrowRoundBack/>
            </button>
            <p>{currentPage}</p>
            <button onClick={handleNext} disabled={totalPages == currentPage}>
             <IoIosArrowRoundForward/>
            </button>
            
        </div>
    )

}