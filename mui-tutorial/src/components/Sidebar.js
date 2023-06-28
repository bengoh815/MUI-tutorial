import { Box } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      bgcolor="lightblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}
