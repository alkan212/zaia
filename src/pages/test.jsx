import { LocationInput } from "@/components/LocationInput";
import { Autocomplete, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";


export default function Test(){

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyAtLpm15cMuMHQnJbVbpsvwbhYeKlLpl9I",
        libraries:["places"]
    })

    const [center, setCenter] = useState({lat:80, lng:-80})


    return(
        <div className="w-screen h-[500px] flex">
              {isLoaded &&
              <>    
                 <GoogleMap zoom={15} center={center} mapContainerClassName="w-full h-full">
                    <Marker position={center} />
                </GoogleMap>

                <LocationInput callback={(pos)=>setCenter(pos)} />
              </>             
              }

         
        </div>
    )
}