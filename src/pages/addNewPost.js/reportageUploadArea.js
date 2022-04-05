import React from "react";
import imagePlaceholder from "../../assets/images/placeholder/imagePlaceholder.svg"
import MediaLibrary from "../../components/mediaLibrary/MediaLibrary";

function ReportageUploadArea () {
    const [showMedia, setShowMedia] = React.useState(false);

    return (
        <div class="imagePoster" onClick={() => {
            setShowMedia(true)
        }}>
      <label onclick="openLibrary(this); return false;" id="1643549111">
        <input type="hidden" name="poster" value="" required=""/>
        <img style={{width: "100%"}} src={imagePlaceholder} alt="img"/>
      </label>
      {
          showMedia ?
          <MediaLibrary/>
          : ""
      }
    </div>
    )
}
export default ReportageUploadArea