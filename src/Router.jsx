import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HomeAnalytics from "./pages/home-analytics";
import Layout from "./component/layout";
import DashboardSass from "./pages/dashboard-sass";
import Statistics from "./pages/statistics";
import Inbox from "./pages/inbox";
import Email from "./pages/email";
import ToDoList from "./pages/to-dolist";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/pricing";
import Teams from "./pages/team";
import Gallery from "./pages/gallery";
import Faq from "./pages/faq";
import Calendar from "./pages/calendar";
import Error from "./pages/error";
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";
import LoginLayout from "./component/layout/LoginLayout";
import ForgetPassword from "./pages/forget-password";
import ConfirmPassword from "./pages/confirm-password";
import Verification from "./pages/verification";
import PasswordSuccess from "./pages/password-success";
import Transaction from "./pages/transaction";
import Notifications from "./pages/notifications";
import Users from "./pages/user";
import History from "./pages/history";
import ProfileOverview from "./pages/profile-overview";
import Overview from "./pages/profile-overview/overview";
import Activities from "./pages/profile-overview/activities";
import Projects from "./pages/profile-overview/projects";
import Documents from "./pages/profile-overview/documents";
import Gallery2 from "./pages/profile-overview/gallery";
import Settings from "./pages/settings";
import PersonalInfo from "./pages/settings/personal-info";
import PaymentMethod from "./pages/settings/payment-method";
import NotificationSetting from "./pages/settings/notification-setting";
import LoginActivity from "./pages/settings/login-activity";
import ChangePassword from "./pages/settings/change-password";
import SettingsFaq from "./pages/settings/faq";
import TermsAndCondition from "./pages/settings/terms-and-conditions";
import SupportTicket from "./pages/support-ticket";
import Airline from "./pages/airline";
import AirlineActivity from "./pages/airline/AirlineActivity";
import Beneficiary from "./pages/profile-overview/beneficiary";
import Manifest from "./pages/manifest";
import ManageBatch from "./pages/claims/ManageBatch";
import ApproveClaims from "./pages/claims/ApproveClaims";
import ProcessClaims from "./pages/claims/ProcessClaim";
import CreateProvider from "./pages/provider/CreatePovider";
import ContractHistorySection from "./component/contract/ContractHistorySection";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginLayout,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/confirm-password",
        element: <ConfirmPassword />,
      },
      {
        path: "/verificaiton",
        element: <Verification />,
      },
      {
        path: "/password-success",
        element: <PasswordSuccess />,
      },
    ],
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "//home-analytics",
        element: <HomeAnalytics />,
      },
      {
        path: "/dashboard-sass",
        element: <DashboardSass />,
      },
      {
        path: "/manifest",
        element: <Manifest />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      {
        path: "/providers",
        children: [
          {
            path: "create-provider",
            element: <CreateProvider />,
          },
        ],
      },
      {
        path: "/to-dolist",
        element: <ToDoList />,
      },
      {
        path: "/integrations",
        element: <Integrations />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contracts",
        element: <Teams />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/customers",
        element: <Users />,
      },
      {
        path: "/airlines",
        children: [
          {
            index: true,
            element: <Airline />,
          },
          {
            path: ":id",
            element: <AirlineActivity />,
          },
        ],
      },
      {
        path: "/claims",
        children: [
          {
            path: "manage-batch",
            element: <ManageBatch />,
          },
          {
            path: "approve-claims",
            element: <ApproveClaims />,
          },
          {
            path: "process-claims",
            element: <ProcessClaims />,
          },
        ],
      },

      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/profile-overview/:id",
        Component: ProfileOverview,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "beneficiaries",
            element: <Beneficiary />,
          },
          {
            path: "history",
            element: <ContractHistorySection />,
          },
          {
            path: "documents",
            element: <Documents />,
          },
          {
            path: "gallery",
            element: <Gallery2 />,
          },
        ],
      },
      {
        path: "/settings",
        Component: Settings,
        children: [
          {
            index: true,
            element: <PersonalInfo />,
          },
          {
            path: "payment-method",
            element: <PaymentMethod />,
          },
          {
            path: "notification-setting",
            element: <NotificationSetting />,
          },
          {
            path: "login-Activity",
            element: <LoginActivity />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "faq",
            element: <SettingsFaq />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndCondition />,
          },
        ],
      },
      {
        path: "/support-ticket",
        element: <SupportTicket />,
      },
    ],
  },
  {
    path: "/error-page",
    element: <Error />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
