const Create = () => {
  return `import * as React from "react";
  import { usePage, PDFEditor } from "@scribble";
  
  const Create = (pageId) => {
    const {page, setPage, savePage} = usePage(pageId)
  
    if (!page) {
      return "Loading..."
    }
  
    return (
      <div>
        <p>
         Title
          <input
            value={page.title}
            onChange={(e) => {
              setPage({
                ...page,
                title: e.currentTarget.value,
              });
            }}
          />
        </p>
        <PDFEditor pageId={page} />
        <button
          onClick={savePage}
        >
          Update Page
        </button>
      </div>
    );
  };
  
  export default Create;
  `;
};

export default Create;
