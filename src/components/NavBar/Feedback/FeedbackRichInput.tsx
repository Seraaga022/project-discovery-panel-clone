import { Box } from "@mui/material";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { motion } from "framer-motion";
import FeedbackInputToolbar from "./FeedbackInputToolbar";

const FeedbackRichInput = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link],
  });

  return (
    <Box
      mt="10px"
      component={motion.div}
      transition={{
        delayChildren: 0.5,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <Box
        className="editor-container"
        bgcolor="#0e0e10"
        width="101%"
        borderRadius="7px"
        border="1px solid #19191b"
        sx={{
          transition: "all ease-in 200ms",
        }}
      >
        <EditorContent
          editor={editor}
          placeholder="You can drop any image here (Optional)"
          className="feedback-input"
          style={{
            width: "100%",
            minHeight: "100px",
            backgroundColor: "#0e0e10",
            borderRadius: "7px",
          }}
        />
        <FeedbackInputToolbar editor={editor} />
      </Box>
    </Box>
  );
};

export default FeedbackRichInput;
