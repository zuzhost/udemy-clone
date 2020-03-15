import React, {useState, useEffect} from "react";
import countriesList from "./countries";
import NumericInput from "../comps/NumericInput";
import Cover from "../comps/cover";

function AccountPage(props){

    const [view, setView] = useState("numview");
    const [loading, setLoading] = useState(false);

    return (
        <div className="oauth-view rel">

            {loading == true && <Cover />}

            <h1 className="s50 otitle fontb">Sign in</h1>
            <h1 className="s24 oline fontn">Enter your phone number and we will send one-time verifcation code</h1>

            <select defaultValue={"+92"} className="iput s24 fontb">
                {
                    countriesList.map(e => {
                        return (
                            <option value={e.dial_code}>{e.name} ({e.dial_code})</option>
                        )
                    })
                }
            </select>
            
            <NumericInput placeholder="0300 123 4567" className="iput s24 fontb" />

            <button className="button s24 fontb cfff">Continue</button>

        </div>
    )

}

export default AccountPage;