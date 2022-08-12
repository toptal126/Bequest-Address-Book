import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Stack>
      <AppBar sx={{ backgroundColor: "#fff" }} elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <img src={"/addressBook.png"} alt="Logo" width={40} />
            <Link data-testid="header-logo-link" to="/">
              <Typography
                data-testid="header-logo-text"
                variant="h5"
                noWrap
                sx={{
                  mx: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Address Book
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar
        sx={{
          marginBottom: "16px",
        }}
      />
      <Container
        data-testid="layout-container"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default Layout;
