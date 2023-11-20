export const setColor = (status) => {
  const statusList = {
    Pending: "darkorange",
    Completed: "green",
    Cancelled: "red",
    Accepted: "green",
    Prepared: "darkcyan",
    Failed: "red",
    ["Order Decline"]: "red",
    ["Out For Delivery"]: "orange",
    ["Order Accepted"]: "green",
    Delivered: "green",

    Refunded: "green",
  };

  if (statusList[status]) {
    return statusList[status];
  }
};
