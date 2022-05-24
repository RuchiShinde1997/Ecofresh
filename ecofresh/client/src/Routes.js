import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./assets/theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error from "./pages/Error/Error";
import UserComplaintsPage from "./pages/Complaints/UserComplaintsPage"
import ComplaintsPage from "./pages/Complaints/AdminComplaintsPage"
import AddComplaintPage from "./pages/Complaints/AddComplaint"
import ComplaintResolutionPage from "./pages/Complaints/ComplaintResolutionPage";
import ComplaintDetailsPage from "./pages/Complaints/ComplaintDetails";
import UserHomepage from "./pages/UserHomepage/UserHomepage";
import UploadRecipe from "./pages/UploadRecipe/UploadRecipe";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import CheckRequestStatus from "./pages/CheckRequestStatus/CheckRequestStatus";
import UploadRecipeHero from './pages/UploadRecipeHero/UploadRecipeHero';
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import AddDeliveryAddress from "./pages/PaymentPage/AddDeliveryAddress";
import Details from "./pages/PaymentPage/Details";
import Payment from "./pages/PaymentPage/Payment";
import Confirmation from "./pages/PaymentPage/Confirmation";
import PaymentMethod from "./pages/PaymentPage/PaymentMethod";
import SupplierDashboard from "./pages/Supplier/SupplierDashboard";
import SupplierOrders from "./pages/Supplier/SupplierOrders";
import OrderDetail from "./pages/Supplier/OrderDetail";
import OrderFulfilment from "./pages/Supplier/OrderFulfilment";
import SupplierPantry from "./pages/Supplier/SupplierPantry";
import AddPantry from "./pages/Supplier/AddPantry";
import Cart from "./pages/Cart/Cart";
import MyOrders from "./pages/MyOrders/MyOrders";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import UploadRecipeAdmin from "./pages/UploadRecipe/UploadRecipeAdmin";
import About from "./pages/LandingPage/About"
import HowItWorks from "./pages/LandingPage/HowItWorks"
import CreateOffer from "./pages/Offers/CreateOffer";
import AdminAllOffers from "./pages/Offers/AdminAllOffers";
import OfferDetails from "./pages/Offers/OfferDetails";
import CustomerAllOffers from "./pages/Offers/CustomerAllOffers";
import CustomerOfferDetails from "./pages/Offers/CustomerOfferDetails";
import PantryUpdate from "./pages/Supplier/PantryUpdate";
import OrderCancel from "./pages/Supplier/OrderCancel";
import Pricing from "./pages/LandingPage/Pricing"
import Redirect from "./pages/Redirect/Redirect";
import Profile from './pages/MyProfile/Profile'

function App() {

  const emailId = localStorage.getItem("emailId");

  return (
    <ThemeProvider theme={theme}>
      {
        emailId ? (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Error />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/usercomplaints" element={<UserComplaintsPage />} />
            <Route path="/addcomplaint" element={<AddComplaintPage />} />

            <Route path='/complaints/ComplaintDetailsPage/'>
              <Route path=':id' element={<ComplaintDetailsPage />}></Route>
            </Route>

            <Route path='/complaints/ComplaintResolutionPage/'>
              <Route path=':id' element={<ComplaintResolutionPage />}></Route>
            </Route>
            <Route path="/uploadRecipe" element={<UploadRecipe />} />
            <Route path="/admin" element={<AdminHomepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/home" element={<UserHomepage />} />
            <Route path="/home/recipe" element={<RecipeDetails />} />
            <Route path="/uploadRecipeNavigation" element={<UploadRecipeHero />} />
            <Route path="/uploadRecipe" element={<UploadRecipe />} />
            <Route path="/checkout" element={<AddDeliveryAddress />} />
            <Route path="/details" element={<Details />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/checkReqStat" element={<CheckRequestStatus />} />
            <Route path="/admin" element={<AdminHomepage />} />
            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/supplier/orders" element={<SupplierOrders />} />
            <Route path="/supplier/orders/:id" element={<OrderDetail />}></Route>
            <Route path="/supplier/orders/fulfilment/:id" element={<OrderFulfilment />}> </Route>
            <Route path="supplier/pantry" element={<SupplierPantry />}></Route>
            <Route path="supplier/pantry/add-pantry/:element" element={<AddPantry></AddPantry>}> </Route>
            <Route path="supplier/pantry/update/:item" element={<PantryUpdate></PantryUpdate>}></Route>
            <Route path="/supplier/orders/cancel/:id" element={<OrderCancel></OrderCancel>}></Route>
            <Route path="/uploadRecipe" element={<UploadRecipe />} />
            <Route path="/checkReqStat" element={<CheckRequestStatus />} />
            <Route path="/admin" element={<AdminHomepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myOrders" element={<MyOrders />} />
            <Route path="/orderDetails" element={<OrderDetails />} />
            <Route path='/adminRecipeRequests' element={<UploadRecipeAdmin />} />
            <Route path='/about' element={<About />} />
            <Route path='howItWorks' element={<HowItWorks />} />
            <Route path="/createoffer" element={<CreateOffer />} />
            <Route path="/adminalloffers" element={<AdminAllOffers />} />
            <Route path="/customeralloffers" element={<CustomerAllOffers />} />
            <Route path="/customerofferdetails" element={<CustomerOfferDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/myProfile" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Redirect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path='/about' element={<About />} />
            <Route path='howItWorks' element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        )
      }

    </ThemeProvider>
  );
}

export default App;
