import AppContext from "./AppContext";
import React, {useState, useEffect} from "react";

function AppRoot(props){

    const [debug, setDebug] = useState(true);
    const [appLoaded, setAppLoaded] = useState(false);

    return (
        <AppContext.Provider value={{
            getDebug: () => { return debug },
            setDebug: setDebug,

            appLoaded: () => { return appLoaded },
            setAppLoaded: mod => { setAppLoaded(mod) }
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppRoot;