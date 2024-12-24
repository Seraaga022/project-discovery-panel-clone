// import { Box, Button } from "@mui/material";
// import React from "react";
// import ReactQuill, { Quill, QuillOptions } from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const FeedbackRichInput = () => {
//   const [convertedText, setConvertedText] = React.useState("");
//   const editorRef = React.useRef<Quill | null>(null);

//   React.useEffect(() => {
//     // configure Quill
//     editorRef.current = new Quill("#feedback-editor", {
//       modules: {
//         toolbar: "#feedback-toolbar",
//       },
//       theme: "snow",
//     });
//   }, []);

//   const toolbarOptions = [
//     ["bold"], // toggled buttons
//     ["link", "image", "formula"],

//     [{ list: "bullet" }],
//     // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//     // [{ direction: "rtl" }], // text direction

//     ["clean"], // remove formatting button
//   ];

//   return (
//     // <Box height="fit-content">
//     //   <ReactQuill
//     //     theme="snow"
//     //     value={convertedText}
//     //     placeholder="You can drop any image here (Optional)"
//     //     onChange={setConvertedText}
//     //     style={{ minHeight: "200px", border: "1px solid #19191b" }}
//     //     modules={
//     //         toolbar: toolbarOptions
//     //     }
//     //   />
//     // </Box>
//     <Box>
//       <Box id="feedback-editor"></Box>
//       <Box id="feedback-toolbar">
//         <Button className="ql-image" sx={{ maxWidth: "10px" }}></Button>
//         <Button className="ql-bold" sx={{ maxWidth: "10px" }}></Button>
//         <Button className="ql-list" sx={{ maxWidth: "10px" }}></Button>
//         <Button className="ql-link" sx={{ maxWidth: "10px" }}></Button>
//       </Box>
//     </Box>
//   );
// };

// export default FeedbackRichInput;
