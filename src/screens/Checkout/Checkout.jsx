import React from "react";
import { BillingAddress } from "../../components/BillingAddress";
import { BillingSummary } from "../../components/BillingSummary";
import { DiscountCodes } from "../../components/DiscountCodes";
import { Header } from "../../components/Header";
import { OrderReview } from "../../components/OrderReview";
import { PaymentMethod } from "../../components/PaymentMethod";
import { ShippingMethod } from "../../components/ShippingMethod";
import "./style.css";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="div-2">
        <OrderReview className="order-review-instance" />
        <DiscountCodes className="discount-codes-instance" />
        <ShippingMethod className="shipping-method-instance" />
        <BillingAddress className="billing-address-instance" />
        <BillingSummary className="billing-summary-instance" />
        <PaymentMethod className="payment-method-instance" />
        <Header className="header-instance" />
      </div>
    </div>
  );
};
