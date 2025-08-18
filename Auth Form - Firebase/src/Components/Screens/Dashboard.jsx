import { AppBar, Toolbar, Typography, Button, Box, Paper, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    toast.info("Logged out successfully 👋");
    navigate("/");
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <AppBar position="static" className="!bg-gray-900">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="font-bold">
            My Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Box className="p-6">
        <Typography variant="h4" className="font-bold text-gray-800 mb-2">
          Welcome Back 👋
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Here’s a quick overview of your dashboard.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid container spacing={3} className="p-6">
        <Grid item xs={12} md={4}>
          <Paper className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Typography variant="h6" className="font-semibold text-gray-800 mb-2">
              Profile
            </Typography>
            <Typography className="text-gray-600">
              View and update your personal details.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Typography variant="h6" className="font-semibold text-gray-800 mb-2">
              Messages
            </Typography>
            <Typography className="text-gray-600">
              Check your latest messages and notifications.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Typography variant="h6" className="font-semibold text-gray-800 mb-2">
              Settings
            </Typography>
            <Typography className="text-gray-600">
              Manage your account preferences and privacy.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
