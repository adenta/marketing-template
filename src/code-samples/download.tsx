const Download = `import * as React from "react";
  import { downloadSignature } from "@scribble";
  
  const Download = (signatureId) => {  
    return (
        <button
          onClick={()=>{downloadSignature(signatureId, {openPrintDialog: true})}}
        >
          Download Signature
        </button>
      </div>
    );
  };
  
  export default Download;
  `;

export default Download;
