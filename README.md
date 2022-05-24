# CSCI5709 Assignment 3

## EcoFresh - Group 10

The goal of EcoFresh is to deliver meal kits which means supplying recipes with ingredients with empirical measurements.
We are aiming to establish a supply chain so our application would be a one stop platform for suppliers, administrators, and customers.
We will provide suppliers with a dashboard to manage their inventory, whereas administrators would manage the entire website and handle feedback or customer complaints.
With EcoFresh, our customers get fresh vegetables, fruits, spices, etc. in the right quantities as mentioned in the recipe they order.
The quantity that will be supplied to them depends on how many portions they order.
They can also post their unique recipe creations, which will be evaluated by the administrative team and if approved, the recipe is published on our blog, and we reward the user with credit points that can be redeemed on their next purchase.

- _Date Created_: 27 03 2022
- _Last Modification Date_: 12 04 2022

## Author

- [Meha Vijaybhai Desai](mailto:meha.desai@dal.ca)
- [Sumadhur Vaidula](mailto:sumadhurvaidyula@dal.ca)
- [Vibhor Bhatnagar](mailto:vibhor.bhatnagar@dal.ca)
- [Kandarp Parikh](mailto:kandarp.parikh@dal.ca)
- [Mugdha Agharkar](mailto:mg425404@dal.ca)
- [Ruchi Shinde](mailto:rc382783@dal.ca)

## GitLab Project Group Repository

Project Group Repository: [https://git.cs.dal.ca/agharkar/group_10_csci_5709](https://git.cs.dal.ca/agharkar/group_10_csci_5709)

## Group Frontend App Deployment URL:

- URL: [https://group10-ecofresh.herokuapp.com/](https://group10-ecofresh.herokuapp.com/)

## Group Backend App Deployment URL:

- URL: [https://csci5709-ecofresh.herokuapp.com/](https://csci5709-ecofresh.herokuapp.com/)

## EcoFresh Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [Node](https://nodejs.org/) - Backend JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/)
- [Express](https://expressjs.com/) - Web framework for [Node](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) - NoSQL database used for data persistence

## Author

[Sumadhur Vaidyula](mailto:sumadhurvaidyula@dal.ca)

- Client Side: [/client]

  - [NavSupplier.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavSupplier.js)
  - [SupplierDashboard.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Supplier/SupplierDashboard.js)
  - [SupplierOrders.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Supplier/SupplierOrders.js)
  - [OrderDetail.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Supplier/OrderDetail.js)
  - [OrderFulfilment.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Supplier/OrderFulfilment.js)
  - [SupplierPantry.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Supplier/SupplierPantry.js)

- Server Side: [/server]
  - [orderDetails.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/orderDetailModel.js)
  - [orderModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/orderModel.js)
  - [pantryModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/pantryModel.js)
  - [orderRoutes.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/orderRoutes.js)

[Meha Vijaybhai Desai](mailto:meha.desai@dal.ca)

- Client Side: [/client]

  - [AddDeliveryAddress.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/AddDeliveryAddress.js)
  - [AddDeliveryAddress.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/AddDeliveryAddress.style.js)
  - [Details.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/Details.js)
  - [Details.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/Details.style.js)
  - [PaymentMethod.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/PaymentMethod.js)
  - [Payment.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/Payment.js)
  - [Confirmation.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/PaymentPage/Confirmation.js)

- Server Side: [/server]
  - [paymentModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/paymentModel.js)
  - [checkoutRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/checkoutRoute.js)
  - [paymentRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/paymentRoute.js)

[Vibhor Bhatnagar](mailto:vibhor.bhatnagar@dal.ca)

- Client Side: [/client]

  - [Footer](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/tree/main/ecofresh/client/src/components/Footer)
  - [NavAdmin.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavAdmin.js)
  - [NavAdmin.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavAdmin.style.js)
  - [NavLanding.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavLanding.js)
  - [NavLanding.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavLanding.style.js)
  - [NavUser.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavUser.js)
  - [NavUser.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Navbar/NavUser.style.js)
  - [CheckRequestStatus.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/CheckRequestStatus/CheckRequestStatus.js)
  - [CheckRequestStatus.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/CheckRequestStatus/CheckRequestStatus.style.js)
  - [LandingPage.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/LandingPage/LandingPage.js)
  - [LandingPage.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/LandingPage/LandingPage.style.js)
  - [UploadRecipe.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipe/UploadRecipe.js)
  - [UploadRecipe.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipe/UploadRecipe.style.js)
  -[UploadRecipeAdmin.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipe/UploadRecipeAdmin.js)
  -[UplaodRecipeAdmin.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipe/UploadRecipeAdmin.style.js)
  - [UploadRecipeHero.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipeHero/UploadRecipeHero.js)
  - [UploadRecipeHero.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UploadRecipeHero/UploadRecipeHero.style.js)

- Server Side: [/server]
  -[uploadImgToS3.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/uploadImgToS3.js)
  -[adminRecipeRequestsRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/adminRecipeRequestsRoute.js)
  - [uploadRecipeModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/uploadRecipeModel.js)
  - [uploadRecipeRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/uploadRecipeRoute.js)

[Kandarp Parikh](mailto:kandarp.parikh@dal.ca)

- Client Side: [/client]

  - [DropDown.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/CommonComponents/DropDown.js)
  - [AddComplaint.css](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/AddComplaint.css)
  - [AddComplaint.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/AddComplaint.js)
  - [AdminComplaintsPage.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/AdminComplaintsPage.js)
  - [ComplaintDetails.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/ComplaintDetails.js)
  - [ComplaintResolutionPage.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/ComplaintResolutionPage.js)
  - [Complaints.css](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/Complaints.css)
  - [UserComplaintsPage.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Complaints/UserComplaintsPage.js)
  - [AdminAllOffers](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/AdminAllOffers.js)
  - [CreateOffer](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/CreateOffer.js)
  - [CustomerAllOffers](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/CustomerAllOffers.js)
  - [CustomerOfferDetails](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/CustomerOfferDetails.js)
  - [OfferDetails](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/OfferDetails.js)
  - [Offers.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Offers/Offers.style.js)

- Server Side: [/server]
  - [complaints.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/complaints.js)
  - [complaintsModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/complaintsModel.js)
  - [complaintRoutes.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/complaintRoutes.js)
  - [offers](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/offers.js)
  - [uploadImgToS3](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/uploadImgToS3.js)
  - [uploadToS3](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/uploadToS3.js)
  - [offersModel](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/offersModel.js)
  - [offerRoute](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/offerRoute.js)

- Routes to Access Features "Complaint" and "Offers"
  - User Login (Credentials :- Email : kandarpparikh@gmail.com , Password : Kandarp@123)
    - [View Existing Complaints](https://group10-ecofresh.herokuapp.com/usercomplaints)
    - [Raise New Complaint](https://group10-ecofresh.herokuapp.com/addcomplaint)
    - [View Offers](https://group10-ecofresh.herokuapp.com/customeralloffers)

  - Admin Login (Credentials :- Email ID: admin@gmail.com , Password: AdminUser@123)
    - [View Customer Complaints](https://group10-ecofresh.herokuapp.com/complaints)
    - [View All Offers and details](https://group10-ecofresh.herokuapp.com/adminalloffers)
    - [Create New Offer](https://group10-ecofresh.herokuapp.com/createoffer)

[Mugdha Agharkar](mailto:mg425404@dal.ca)
Features : Home Page(Browsing), Add to cart(Cart Management)

- Client Side: [/client]

  - [Button.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Button/Button.js)
  - [Checkbox.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Checkbox/Checkbox.js)
  - [AdminAccountDropDown.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Dropdown/AdminAccountDropdown.js)
  - [HomeAccountDropDown.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Dropdown/HomeAccountDropdown.js)
  - [Filter.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Filter/Filter.js)
  - [Filter.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/Filter/Filter.style.js)
  - [RecipeCard.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/RecipeCard/RecipeCard.js)
  - [RecipeCard.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/RecipeCard/RecipeCard.style.js)
  - [PasswordTextBox.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/TextBox/PasswordTextBox.js)
  - [TextBox.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/TextBox/Textbox.js)
  - [Cart.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Cart/Cart.js)
  - [Cart.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Cart/Cart.style.js)
  - [Error.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Error/Error.js)
  - [RecipeDetails.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/RecipeDetails/RecipeDetails.js)
  - [RecipeDetails.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/RecipeDetails/RecipeDetails.style.js)
  - [UserHomepage.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UserHomepage/UserHomepage.js)
  - [UserHomepage.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/UserHomepage/UserHomepage.style.js)
  - [CartItem.js] (https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/CartItem/CartItem.js)
  - [CartItem.style.js] (https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/components/CartItem/CartItem.style.js)
  - [Cart.js] (https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Cart/Cart.js)
  - [Cart.style.js] (https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Cart/Cart.style.js)
  - [cartModel.js] (https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/cartModel.js)
  



- Server Side: [/server]
  - [recipe.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/recipe.js)
  - [cartModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/cartModel.js)
  - [recipeModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/recipeModel.js)
  - [cartManagementRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/cartManagementRoute.js)
  - [recipesRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/recipesRoute.js)

[Ruchi Shinde](mailto:rc382783@dal.ca)

- Client Side: [/client]

  - [ForgotPassword.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/ForgotPassword/ForgotPassword.js)
  - [Login.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Login/Login.js)
  - [Login.style.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Login/Login.style.js)
  - [Register.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/client/src/pages/Register/Register.js)

- Server Side: [/server]
  - [login.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/controllers/login.js)
  - [usersModel.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/models/usersModel.js)
  - [usersRoute.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/routes/usersRoute.js)
  - [config.js](https://git.cs.dal.ca/agharkar/group_10_csci_5709/-/blob/main/ecofresh/server/config.js)

## Test User Credentials
1. User
Email ID: mug@gmail.com
Password: Mugdha@0701

2. Admin
Email ID: admin@gmail.com
Password: AdminUser@123

3. Supplier
Email ID: supplier@gmail.com
Password: Supplier@123

### Test Payment Gateway Credentials
- Card Number: 4242 4242 4242 4242
- Expiry: Any future date
- CVV: Any 3 digit number
- Postal code: M5T 1T4

