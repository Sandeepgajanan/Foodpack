"use client";

import Link from "next/link";
import Image from "next/image";
import { data } from "@/app/constants/myordersData";

const MyOrders = () => {
  const hasOrders = data.length > 0;
  const tableHeaders = ["Product", "Order Date", "Status", "Quantity", "Price/Unit", "Total"];

  return (
    <section className="w-full bg-slate-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:p-3">
        <h1 className="text-3xl font-bold  my-4 max-sm:text-2xl max-sm:my-2 text-emerald-600">My Orders</h1>

        {hasOrders ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="overflow-x-auto" id="scroll">
              <table className="w-full text-zinc-700">
                <thead>
                  <tr className="bg-zinc-200">
                    {tableHeaders.map((header, index) => (
                      <th className="p-3 font-bold text-left max-sm:p-2 max-sm:text-xs whitespace-nowrap" key={index}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-300">
                  {data.map((order) => (
                    <tr key={order.id} >
                      <td className="p-2 w-72 max-sm:w-48">
                        <div className="flex items-center gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm max-sm:w-12 max-sm:h-12">
                            <Image
                              src={order.image}
                              alt={order.productName}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-sm max-sm:text-xs ">{order.productName}</h3>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 w-40 max-sm:w-32 max-sm:text-xs">
                        {new Date(order.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="p-2 w-36 max-sm:w-24">
                        <span className={`text-sm font-bold ${
                          order.status === "Delivered" 
                            ? "text-green-700 hover:text-green-800"
                            : "text-yellow-700 hover:text-yellow-800"
                        } transition-colors duration-200 max-sm:text-xs`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-2 w-28 font-medium pl-8 max-sm:pl-4 max-sm:w-20 max-sm:text-xs">
                        {order.quantity}
                      </td>
                      <td className="p-2 w-28 pl-8 max-sm:pl-4 max-sm:w-20">
                        <span className="font-medium max-sm:text-xs hover:text-emerald-600 transition-colors duration-200">
                          ₹{order.price.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-2 w-28 max-sm:w-20">
                        <span className="font-bold text-lg max-sm:text-sm hover:text-emerald-600 transition-colors duration-200">
                          ₹{(order.price * order.quantity).toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-8 max-sm:space-y-4">
              <div className="text-8xl text-emerald-600 animate-bounce hover:scale-110 transition-transform duration-300 max-sm:text-6xl">
                <i className="ri-shopping-bag-line"></i>
              </div>
              <div className="space-y-3 max-sm:space-y-2">
                <h3 className="text-2xl font-bold text-gray-800 hover:text-emerald-600 transition-colors duration-300 max-sm:text-xl">No Orders Yet</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto hover:text-gray-700 transition-colors duration-300 max-sm:text-base max-sm:px-4">
                  Looks like you haven't made your choice yet. Explore our products and find something you love!
                </p>
              </div>
              <Link 
                href="/user/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 font-medium max-sm:px-6 max-sm:py-2.5 active:scale-95"
              >
                <i className="ri-shopping-cart-2-line animate-pulse"></i>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
