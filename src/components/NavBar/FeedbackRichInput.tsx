import { Box, Button, ThemeProvider } from "@mui/material";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import React from "react";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineBold } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import FeedbackToolbarItem from "../../theme/FeedbackToolbarItem";
import { motion } from "framer-motion";

const FeedbackRichInput = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link],
  });
  const imageToolbarRef = React.useRef(null);
  const boldToolbarRef = React.useRef(null);
  const listToolbarRef = React.useRef(null);
  const linkToolbarRef = React.useRef(null);

  const addImage = (event) => {
    const files = event.target.files;
    if (!editor) return;
    if (files.length > 0) {
      const file = files;
      editor.chain().focus().setImage({ src: file }).run();
    }
  };

  const handleLink = () => {
    const url = window.prompt("Enter the URL");
    if (!editor) return;
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
    console.log(editor.getHTML);
  };

  const handleToolBarClick = (ref) => {
    if (!ref.current) return;
    ref.current.click();
  };

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
          //   "&: .Mui-focused": {
          //     outline: "3px solid #141423",
          //   },
        }}
        // onClick={(e) => setFeedbackEditorFocus(true)}
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
        <Box className="toolbar" p="10px">
          <Box>
            {/* image */}
            <input
              type="file"
              onChange={addImage}
              accept="image/*"
              placeholder="."
              ref={imageToolbarRef}
              style={{ display: "none" }}
            />
            {/* bold */}
            <button
              onClick={() => {
                if (!editor) return;
                editor.chain().focus().toggleBold().run();
              }}
              ref={boldToolbarRef}
              style={{ display: "none" }}
            >
              Bold
            </button>
            {/* list */}
            <button
              onClick={() => {
                if (!editor) return;
                editor.chain().focus().toggleBulletList().run();
              }}
              ref={listToolbarRef}
              style={{ display: "none" }}
            >
              Bullet List
            </button>
            {/* link */}
            <button
              onClick={handleLink}
              ref={linkToolbarRef}
              style={{ display: "none" }}
            >
              Link
            </button>
          </Box>
          <Box display="flex" gap="10px">
            <ThemeProvider theme={FeedbackToolbarItem}>
              <Box
                minWidth="16px"
                maxWidth="16px"
                minHeight="16px"
                maxHeight="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  color="info"
                  onClick={() => handleToolBarClick(imageToolbarRef)}
                  sx={{
                    textTransform: "none",
                    minWidth: "1px",
                    p: "1px",
                    transition: "all ease-in 200ms",
                    "& .Mui-focused": {
                      outline: "2px solid #272b3a",
                    },
                    "&:hover": {
                      bgcolor: "#252526",
                    },
                  }}
                >
                  <CiImageOn color="#6b6d79" />
                </Button>
              </Box>
              <Box
                minWidth="16px"
                maxWidth="16px"
                minHeight="16px"
                maxHeight="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  color="info"
                  onClick={() => handleToolBarClick(boldToolbarRef)}
                  sx={{
                    textTransform: "none",
                    minWidth: "1px",
                    p: "0",
                    transition: "all ease-in 200ms",
                    "& .Mui-focused": {
                      outline: "2px solid #272b3a",
                    },
                    "&:hover": {
                      bgcolor: "#252526",
                    },
                  }}
                >
                  <AiOutlineBold color="#6b6d79" />
                </Button>
              </Box>
              <Box
                minWidth="16px"
                maxWidth="16px"
                minHeight="16px"
                maxHeight="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  color="info"
                  onClick={() => handleToolBarClick(listToolbarRef)}
                  sx={{
                    textTransform: "none",
                    minWidth: "1px",
                    p: "0",
                    transition: "all ease-in 200ms",
                    "& .Mui-focused": {
                      outline: "2px solid #272b3a",
                    },
                    "&:hover": {
                      bgcolor: "#252526",
                    },
                  }}
                >
                  <IoIosList size={18} color="#6b6d79" />
                </Button>
              </Box>
              <Box
                minWidth="16px"
                maxWidth="16px"
                minHeight="16px"
                maxHeight="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  color="info"
                  onClick={() => handleToolBarClick(linkToolbarRef)}
                  sx={{
                    textTransform: "none",
                    minWidth: "1px",
                    p: "1.5px",
                    transition: "all ease-in 200ms",
                    "& .Mui-focused": {
                      outline: "2px solid #272b3a",
                    },
                    "&:hover": {
                      bgcolor: "#252526",
                    },
                  }}
                >
                  <FiLink color="#6b6d79" size={12} />
                </Button>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackRichInput;
