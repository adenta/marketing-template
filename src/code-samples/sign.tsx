const Sign = `import * as React from "react";
import { CreateSignatureBlock, SignPageBlock, usePage } from "@scribble";

const Sign = (pageId) => {
  const { title, saveSignature, canStartSigning } = usePage(pageId);

  return (
    <div>
      <h2>Sign {title}</h2>
      {canStartSigning ? (
        <SignPageBlock pageId={pageId} />
      ) : (
        <div>
          <CreateSignatureBlock pageId={pageId} />
          <button onClick={saveSignature}>Save Signature</button>
        </div>
      )}
    </div>
  );
};

export default Sign;

  `;

export default Sign;
