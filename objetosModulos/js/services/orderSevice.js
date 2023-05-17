import Order from "../models /order";
import * as shippingService  from "./shippingService";
import * as orderDiscont from "./orderDiscont.js"
export function total(Order){

    const shipping = shippingService;
    const basic = Order.basic;
    const discont = orderDiscont

    return basic*discont + shipping;
}