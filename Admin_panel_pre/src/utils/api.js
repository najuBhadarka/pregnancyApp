import axios from "axios";

export const API_URL = 'http://localhost:3000/v1';
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const auth = store.getState().user || null;

  if (auth) {
    config.headers["authorization"] = auth.token;
  }
  if (config?.urlParams && typeof config?.url?.replace === "function") {
    Object.entries(config.urlParams || {}).forEach(([key, value]) => {
      config.url = config.url.replace(`:${key}`, value); // encodeURIComponent()
    });
  }
  return config;
});

export const endPoints = {
  // Admin
  ADMIN_LOGIN: "/auth/admin/login",
  ADMIN_LOGOUT: "/api/v1/auth/logout",
  RESET_PASSWORD: "/api/v1/auth/change_password",
  FORGOT_PASSWORD: "/api/v1/auth/forgot_password",
  NEW_PASSWORD: "/api/v1/auth/confirm_forgot_password",
  GET_USER: "/auth/user-profile",
  UPDATE_USER: "/auth/update-profile/:id",
  DELETE_USER: "/user/delete-user/:id",
  ADD_USER: "/auth/register",
  UPDATE_STATUS: "/user/update-status/:id",
  GET_USER_LIST: "/user/user-list",
  GET_USER_BY_ID: "/user/get-user-details/:id",
  DELETE_DELIVERY_USER: "/api/v1/admin/deleteusers/:id",

  // Category
  ADD_CATEGORY: "/api/v1/category/addcategory",
  GET_CATEGORY: "/api/v1/category/getcategories",
  DELETE_CATEGORY: "/api/v1/category/deletecategory/:id",
  UPDATE_CATEGORY: "/api/v1/category/updatecategory/:id",
  CATEGORY_BY_ID: "/api/v1/category/getcategory/:id",

  // Discount-Type
  ADD_DISCOUNT_TYPE: "/api/v1/discount_type/adddiscounttype",
  GET_DISCOUNT_TYPE: "/api/v1/discount_type/getdiscounttype",
  GET_DISCOUNT_TYPE_BY_ID: "/api/v1/discount_type/getdiscounttypebyid/:id",
  UPDATE_DISCOUNT_TYPE: "/api/v1/discount_type/updatediscounttype/:id",
  DELETE_DISCOUNT_TYPE: "/api/v1/discount_type/deletediscounttype/:id",

  // Banner
  GET_BANNER_BY_ID: "/api/v1/banner/getbannerbyid/:id",
  ADD_BANNER: "/api/v1/banner/addbanner",
  GET_BANNER: "/api/v1/banner/getbanner",
  DELETE_BANNER: "/api/v1/banner/deletebanner/:id",
  UPDATE_BANNER: "/api/v1/banner/updatebanner/:id",

  // Discount
  ADD_DISCOUNT: "/api/v1/discount/adddiscount",
  GET_DISCOUNT: "/api/v1/discount/getdiscount",
  GET_DISCOUNT_BY_ID: "/api/v1/discount/getdiscountbyid/:id",
  DELETE_DISCOUNT: "/api/v1/discount/deletediscount/:id",
  UPDATE_DISCOUNT: "/api/v1/discount/updatediscount/:id",

  // Order
  GET_ORDER: "/api/v1/order/getorder",
  GET_ORDER_BY_ID: "/api/v1/order/getorderbyid/:id",
  UPDATE_ORDER: "/api/v1/order/updateorder/:id",
  DELETE_ORDER: "/api/v1/order/deleteorder/:id",
  SEND_PUSH_NOTIFICATION: "/api/v1/auth/send_push_notifications",

  // Items
  ADD_ITEM: "/api/v1/items/additems",
  GET_ITEM_BY_CAT: "/api/v1/items/getitems",
  GET_ITEM_BY_ID: "/api/v1/items/getitemsbyid/:id",
  UPDATE_ITEM: "/api/v1/items/updateitems/:id",
  DELETE_ITEM: "/api/v1/items/deleteitems/:id",
  GET_ITEM_BY_CAT_ID: "/api/v1/items/getitems/:id",

  // Packages
  ADD_PACKAGE: "/api/v1/items/addpackage",
  GET_ITEMS_PACKAGE_BY_ID: "/api/v1/items/getitemspackagebyid/:id",
  DELETE_ITEMS_FROM_PACKAGE: "/api/v1/items/deleteitemsfrompackage/:packageid/:groupid/:itemid",
  DELETE_ITEMS_GROUP_FROM_PACKAGE: "/api/v1/items/deletecardfrompackage/:packageid/:groupid",
  UPDATE_PACKAGE:"/api/v1/items/updateitemspackage/:id",


  // Roles
  GET_ROLES: "/api/v1/admin/roles",
  ADD_ROLE: "/api/v1/admin/roles",
  DELETE_ROLE: "/api/v1/admin/roles/:id",
  UPDATE_ROLE: "/api/v1/admin/roles/:id",
  GET_ROLE_BY_ID: "/api/v1/admin/roles/:id",

  // Settings
  GET_LOYALITYPOINT_SETTING: "/api/v1/loyalitypoint/getsetting",
  UPDATE_SETTING: "/api/v1/loyalitypoint/updatesetting/:id",

  // Size-Price
  GET_SIZE_BY_ID: "/api/v1/size/getsizesbyid/:id",
  UPDATE_SIZE: "/api/v1/size/updatesize/:id",
  ADD_SIZE_PRICE: "/api/v1/sizeprice/addsizeprice",
  ADD_SIZE: "/api/v1/size/addsize",
  GET_SIZE: "/api/v1/size/getsizes",
  DELETE_SIZE: "/api/v1/size/deletesize/:id",

  // Relevant-Items
  GET_RELEVANT_PRODUCTS: "/api/v1/items/getitemsrelevant",
  ADD_RELAVENT_PRODUCT: "/api/v1/relevantItem/addrelevantitem",

  // NewsLetter
  ADD_NEWSLETTER: "/api/v1/newsletter/addnewsletter",
  GET_NEWSLETTER: "/api/v1/newsletter/getNewsLetters",
  DELETE_NEWSLETTER: "/api/v1/newsletter/deleteNewsLetter/:id",
  GET_NEWSLETTER_BY_ID: "/api/v1/newsletter/getNewsLetterById/:id",
  UPDATE_NEWSLETTER: "/api/v1/newsletter/updateNewsLetter/:id",
  SEND_NEWSLETTER: "/api/v1/newsletter/sendnewsletter/:id",

  DELIVERY_PARTNER_REGISTER: "/api/v1/auth/register",
  MAKE_PAYMENT: "/api/v1/payment/make-payment",
  REFUND_PAYMENT: "/api/v1/payment/refund-payment",

  //setting
  GET_SETTING: "/api/v1/setting/get-setting",
  UPDATE_SETTINGS: "/api/v1/setting/update-setting/:id",
  UPDATE_MIN_VALUE: "/api/v1/delivery-charges/update_delivery_charges_list/:id",
  GET_DELIVERY_CHARGES: "/api/v1/delivery-charges/get_delivery_charges_list",
};
