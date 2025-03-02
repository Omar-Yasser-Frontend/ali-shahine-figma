function PDFView({ switchShow }) {
  return (
    <div className="inset-0 bg-white top-0 fixed z-[1000]">
      <button
        onClick={switchShow}
        className="block h-8 w-8 ml-auto bg-red-500 m-3 rounded-md cursor-pointer justify-center items-center"
      >
        back
      </button>
      <object
        data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        type="application/pdf"
        width="100%"
        height="800"
      ></object>
    </div>
  );
}

export default PDFView;
