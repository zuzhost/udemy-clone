import React, {useEffect} from "react";

function DiscoverPage(){

    useEffect(()=>{
        document.title = "Discover";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Discover</h1>
        </div>
    )
}

export default DiscoverPage;