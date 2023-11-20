export const PAYMENT_STATUS = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  REFUNDED: "Refunded",
  FAILED: "Failed",
  CANCELLED: "Cancelled",
};

export const ORDER_STATUS = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  FAILED: "Failed",
  CANCELLED: "Cancelled",
  PREPARED: "Prepared",
  ACCEPTED: "Accepted",
  DELIVERED: "Delivered",
  OUTFORDELIVERY: "Out For Delivery",
};

export const roleList = {
  admin: "Admin",
  restaurant_admin: "Restaurant Admin",
  customer: "Customer",
  delivery_partner: "Delivery Partner",
  postman_test: "Postman Testing",
};

export const productSizeList = ["small", "medium", "large", "extraLarge"];

export const discountList = {
  percentage: "Percentage",
  fixed_value: "Fixed value",
  particular_day: "Particular day",
  bill_amount: "Bill amount",
};

export const currencyType = {
  USD: "$",
  INR: "₹",
};

export const valueTypeList = {
  Flat: "Flat",
};
