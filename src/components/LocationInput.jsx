import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";


export function LocationInput({callback}){
    const [searchResult, setSearchResult] = useState("Result: none");


    function onLoad(autocomplete) {
        setSearchResult(autocomplete);
      }

      
  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
        let lat = place.geometry.location.lat()
        let lng = place.geometry.location.lng()

        callback({lat:lat, lng:lng})
    } else {
      alert("Please enter text");
    }
  } 

    return(
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad} fields={"geometry.location"} >
        <input className="" />
    </Autocomplete>
    )
}