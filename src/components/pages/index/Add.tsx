import { Button, ButtonGroup, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import AddByPostcode from "./add/AddByPostcode";
import AddManual from "./add/AddManual";

const Add = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [mode, setMode] = useState<"manual" | "byPostcode">("manual");

  return (
    <Paper
      onClick={(e) => e.stopPropagation()}
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        maxHeight: "calc(100% - 64px)",
        overflow: "scroll",
        alignSelf: "center",
        width: "400px",
        padding: "16px",
        "&>*:not(:last-child)": {
          marginBottom: "16px",
        },
      }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        component="h1"
        textAlign="center"
        gutterBottom
      >
        Add new address
      </Typography>

      <ButtonGroup
        sx={{
          alignSelf: "center",
        }}
      >
        <Button
          data-testid="add-manual-button"
          sx={{
            width: "140px",
            "&:hover": {
              transform: "unset",
            },
          }}
          onClick={() => setMode("manual")}
          variant={mode === "manual" ? "contained" : "outlined"}
        >
          Manual
        </Button>
        <Button
          data-testid="add-by-postcode-button"
          sx={{
            width: "140px",
            "&:hover": {
              transform: "unset",
            },
          }}
          onClick={() => setMode("byPostcode")}
          variant={mode === "byPostcode" ? "contained" : "outlined"}
        >
          By Postcode
        </Button>
      </ButtonGroup>

      {mode === "manual" ? <AddManual /> : <AddByPostcode />}
    </Paper>
  );
});

Add.displayName = "Add";

export default Add;
