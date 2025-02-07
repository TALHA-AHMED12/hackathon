// import { Producte } from "@/types/data"

// // sanity/schemas/order.js
// export const orderSchema = {
//     name: 'order',
//     title: 'Order',
//     type: 'document',
//     fields: [
//       { name: 'orderId', title: 'Order ID', type: 'string' },
//       { name: 'items', title: 'Items', type: 'array', of: [{
//         type: 'object',
//         fields: [
//           { name: 'id', title: 'Product ID', type: 'string' },
//           { name: 'title', title: 'Product Title', type: 'string' },
//           { name: 'quantity', title: 'Quantity', type: 'number' },
//           { name: 'price', title: 'Price', type: 'number' },
//           { name: 'totalPrice', title: 'Total Price', type: 'number' },
//         ]
//       }]},
//       { name: 'shippingInfo', title: 'Shipping Info', type: 'object', fields: [
//         { name: 'fullName', title: 'Full Name', type: 'string' },
//         { name: 'email', title: 'Email', type: 'string' },
//         { name: 'address', title: 'Address', type: 'string' },
//         { name: 'city', title: 'City', type: 'string' },
//         { name: 'postalCode', title: 'Postal Code', type: 'string' },
//         { name: 'country', title: 'Country', type: 'string' },
//         { name: 'phone', title: 'Phone', type: 'string' },
//       ]},
//       { name: 'totalAmount', title: 'Total Amount', type: 'number' },
//       { name: 'paymentMethod', title: 'Payment Method', type: 'string' },
//       { name: 'orderDate', title: 'Order Date', type: 'datetime' },
//       { name: 'status', title: 'Status', type: 'string', 
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Processing', value: 'processing' },
//             { title: 'Shipped', value: 'shipped' },
//             { title: 'Delivered', value: 'delivered' },
//             { title: 'Cancelled', value: 'cancelled' },
//           ]
//         }
//       },
//     ],
//     preview: {
//       select: {
//         orderId: 'orderId',
//         customer: 'shippingInfo.fullName',
//         total: 'totalAmount',
//         status: 'status'
//       },
//       prepare(selection) {
//         const { orderId, customer, total, status } = selection
//         return {
//           title: `Order #${orderId}`,
//           subtitle: `${customer} - $${total} (${status})`
//         }
//       }
//     }
//   }