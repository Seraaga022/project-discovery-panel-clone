import React from "react";
import {
  Box,
  BoxProps,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AppTheme } from "../../../theme/AppTheme";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineBold } from "react-icons/ai";
import { IoIosList } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import { Editor } from "@tiptap/react";

const ToolbarKey = (props: BoxProps) => {
  const ToolbarButtonTheme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          color: "info",
          className: "toolbar-key",
          sx: {
            textTransform: "none",
            minWidth: "1px",
            p: "1px",
            transition: "all ease-in 200ms",
            "& .Mui-focused": {
              outline: "2px solid #272b3a",
            },
            "& .MuiTouchRipple-root": {
              color: AppTheme.palette.info.dark,
            },
            "&:hover": {
              bgcolor: AppTheme.palette.info.light,
            },
            color: AppTheme.palette.info.contrastText,
          },
        },
      },
    },
  });

  return (
    <Box
      width="16px"
      maxWidth="16px"
      height="16px"
      maxHeight="16px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <ThemeProvider theme={ToolbarButtonTheme}>{props.children}</ThemeProvider>
    </Box>
  );
};

const FeedbackInputToolbar = ({ editor }: { editor: Editor | null }) => {
  const imageToolbarRef = React.useRef(null);
  const boldToolbarRef = React.useRef(null);
  const listToolbarRef = React.useRef(null);
  const linkToolbarRef = React.useRef(null);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const FILES = event.target.files;
    if (!editor) return;
    if (FILES && FILES.length > 0) {
      const UPLOADED_FILE = FILES[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          editor.chain().focus().setImage({ src: e.target.result }).run();
        }
      };
      reader.readAsDataURL(UPLOADED_FILE);
    }
  };

  const handleLink = () => {
    const URL = window.prompt("Enter the URL");
    if (!editor) return;
    if (URL) {
      editor.chain().focus().setLink({ href: URL }).run();
    }
    console.log(editor.getHTML);
  };

  const handleToolBarClick = (
    ref: React.RefObject<HTMLInputElement | HTMLButtonElement>
  ) => {
    if (!ref.current) return;
    ref.current.click();
  };

  return (
    <Box className="toolbar" p="10px">
      {/* toolbar actual functionality trigers */}
      <Box
        sx={{
          "& > input, button": {
            display: "none",
          },
        }}
      >
        {/* image */}
        <input
          type="file"
          onChange={handleImage}
          accept="image/*"
          placeholder="."
          ref={imageToolbarRef}
        />
        {/* bold */}
        <button
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().toggleBold().run();
          }}
          ref={boldToolbarRef}
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
        >
          Bullet List
        </button>
        {/* link */}
        <button onClick={handleLink} ref={linkToolbarRef}>
          Link
        </button>
      </Box>
      {/* toolbar ui */}
      <Box display="flex" gap="10px">
        {/* image */}
        <ToolbarKey>
          <Button onClick={() => handleToolBarClick(imageToolbarRef)}>
            <CiImageOn />
          </Button>
        </ToolbarKey>
        {/* bold */}
        <ToolbarKey
          sx={{
            "& .toolbar-key": {
              bgcolor: editor?.isActive("bold") ? "#252526" : "unset",
            },
          }}
        >
          <Button onClick={() => handleToolBarClick(boldToolbarRef)}>
            <AiOutlineBold />
          </Button>
        </ToolbarKey>
        {/* list */}
        <ToolbarKey>
          <Button onClick={() => handleToolBarClick(listToolbarRef)}>
            <IoIosList size={28} />
          </Button>
        </ToolbarKey>
        {/* link */}
        <ToolbarKey>
          <Button onClick={() => handleToolBarClick(linkToolbarRef)}>
            <FiLink style={{ margin: "1px" }} size={12} />
          </Button>
        </ToolbarKey>
      </Box>
    </Box>
  );
};

export default FeedbackInputToolbar;
