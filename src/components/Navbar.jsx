import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <AppBar
      position="relative"
      sx={{
        maxWidth: "100vw",
        backgroundColor: theme.navFooterBackgroundColor,
        color: theme.textColor,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
          backgroundColor: theme.navFooterBackgroundColor,
          color: theme.textColor,
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Link>

          {/* Desktop Menu */}
          {isDesktop ? (
            <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  style={{ textDecoration: "none", color: theme.textColor }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          ) : (
            <>
              <IconButton onClick={toggleDrawer(true)} sx={{ ml: "auto" }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box sx={{ width: 250 }}>
                  <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
                    <CloseIcon />
                  </IconButton>
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem
                        key={index}
                        component={Link}
                        to={item.to}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
