import React, {useEffect} from "react";

function MyCoursesPage(){

    useEffect(()=>{
        document.title = "My Courses";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">My Courses</h1>
        </div>
    )
}

export default MyCoursesPage;