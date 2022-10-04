import React, { useEffect } from "react";

function GoogleMap(){
    useEffect(()=>{
        const ifameData=document.getElementById("googlemapserpt")
        const lat=17.362750;
        const lon=78.548600;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe id="googlemapserpt" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;