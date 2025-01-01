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
import { ToolbarItemClickHandlerActionT } from "@appTypes/dashboard";

const FeedbackInputToolbar = ({ editor }: { editor: Editor | null }) => {
  const imageToolbarRef = React.useRef(null);

  const ToolbarKey = ({
    boldKey = false,
    ...props
  }: BoxProps & { boldKey?: boolean }) => {
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
        sx={{
          "& .toolbar-key": {
            bgcolor: boldKey
              ? editor?.isActive("bold")
                ? "#252526"
                : "unset"
              : "unset",
          },
        }}
        {...props}
      >
        <ThemeProvider theme={ToolbarButtonTheme}>
          {props.children}
        </ThemeProvider>
      </Box>
    );
  };

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

  const handleImageClick = (
    ref: React.RefObject<HTMLInputElement | HTMLButtonElement>
  ) => {
    if (!ref.current) return;
    ref.current.click();
  };

  const toolbarItemClickHandler = ({
    action,
  }: ToolbarItemClickHandlerActionT) => {
    if (!editor) return;
    switch (action) {
      case "BOLD": {
        editor.chain().focus().toggleBold().run();
        return;
      }
      case "LIST": {
        editor.chain().focus().toggleBulletList().run();
        return;
      }
    }
  };

  return (
    <Box className="toolbar" p="10px">
      {/* toolbar actual image input trigger */}
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
      </Box>
      {/* toolbar ui */}
      <Box display="flex" gap="10px">
        {/* image */}
        <ToolbarKey>
          <Button onClick={() => handleImageClick(imageToolbarRef)}>
            <CiImageOn />
          </Button>
        </ToolbarKey>
        {/* bold */}
        <ToolbarKey boldKey>
          <Button onClick={() => toolbarItemClickHandler({ action: "BOLD" })}>
            <AiOutlineBold />
          </Button>
        </ToolbarKey>
        {/* list */}
        <ToolbarKey>
          <Button onClick={() => toolbarItemClickHandler({ action: "LIST" })}>
            <IoIosList style={{ maxHeight: "15px" }} size={28} />
          </Button>
        </ToolbarKey>
        {/* link */}
        <ToolbarKey>
          <Button onClick={() => handleLink()}>
            <FiLink style={{ margin: "1px" }} size={12} />
          </Button>
        </ToolbarKey>
      </Box>
    </Box>
  );
};

export default FeedbackInputToolbar;
