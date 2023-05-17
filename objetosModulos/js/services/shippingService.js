import Order from "../models /order";

export function shippingService(Order);
if(Order.basic<100) {
    const shipping = 20;
} 
if(Order.basic >100 && Order.basic < 200) {
    const shipping = 12;
} 
else {
    const shipping = 0;
}
return shipping;







