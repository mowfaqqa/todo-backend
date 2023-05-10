import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// CREATE NEW ORDER CONTROLLER
// POST
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, deliveryAddress, totalPrice, itemPrice, paymentMethod } =
    req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      deliveryAddress,
      totalPrice,
      itemPrice,
      paymentMethod,
      deliveryPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
// GET ORDER BY ID
//  GET
const getOrderByID = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});
// UPDATE ORDER BY TO PAID
//  UPDATE
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      satus: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { addOrderItems, getOrderByID, updateOrderToPaid };
