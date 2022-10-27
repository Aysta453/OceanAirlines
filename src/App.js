import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import { createTheme, ThemeProvider } from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#377dff",
  //     dark: "#185cdb",
  //     light: "#ffffff",
  //   },
  //   secondary: {
  //     main: "#4e5d78",
  //     dark: "#cfd5e3",
  //     light: "#f0f2f5",
  //   },
  // },
  // typography: {
  //   fontFamily: "'Lato', sans-serif",
  // },
})

function App() {
  return (
    // <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route exact path="/*" element={<HomePage />} />
          {/* <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/messages" element={<HomePage />} />
            <Route exact path="/profile/:username" element={<ProfilePage />} />
            <Route exact path="/settings" element={<Setting />}>
              <Route exact path="/settings/edit" element={<EditProfile />} />
              <Route exact path="/settings/security" element={<SecuritySettingPage />} />
            </Route>
            <Route exact path="/post/:postId" element={<PostPage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/notifications" element={<NotificationPage />} />
            <Route exact path="/mycommunity" element={<CommunityPage />} />
            <Route exact path="/groups" element={<GroupPage />} />
            <Route exact path="/groups/:username" element={<GroupProfilePage />} />
            <Route exact path="/groups/edit/:uniqueName" element={<GroupEditPage />} />
            <Route exact path="/groups/member/:uniqueName" element={<GroupMemberPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/recovery/:recovermail" element={<RecoveryPage />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </ThemeProvider>
    // </AuthProvider>
  );
}

export default App;
