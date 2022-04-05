import React from "react";

function MediaLibrary () {
    return (
       <div className="library">
        <div className="libraryContainer">
        <div class="libraryHead">
      <h3 style={{display:"inline-block",margin:"7px 0px"}}><i class="fa fa-image" aria-hidden="true"></i>&nbsp; Media Library</h3>
      <div style={{float:"right",textAlign:"right",margin:"-5px 0px"}}>
        <form id="uploadPicture" method="post" enctype="multipart/form-data" onsubmit="uploadPicture(event, this); return false;" style={{display:"inline"}}>
          <label title="Hold CTRL to choose multiple">
            <span><i class="fa fa-upload" aria-hidden="true"></i> Upload Images</span>
            <input type="hidden" name="image-upload" value="images"/>
            <input id="image-choser" type="file" name="image[]" multiple="" accept="image/jpeg" style={{display:"none"}}/>
          </label>
        </form>
        <button style={{cursor:"pointer"}} title="Close" className="close__media"><i class="fa fa-close" aria-hidden="true"></i></button>
      </div>
      <hr/>
    </div>
        </div>
       </div>
    )
}
export default MediaLibrary;