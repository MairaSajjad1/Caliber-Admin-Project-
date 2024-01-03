import React from 'react'

function page() {
  return (
    <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
    <h1 className="font-semibold text-xl text-[#080808]">Order Details</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Order No:</h3>
        {/* <h3>{order?.data?.[0]?.order_no}</h3> */}
        <h5>#123</h5>
      </div>
     
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Payment Status:</h3>
        {/* <h3>{order?.data?.[0]?.payment_status}</h3> */}
        <h5>Open</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Order Date:</h3>
        <h5>data</h5>
        {/* <h3>{new Date(order?.data?.[0]?.created_at).toDateString()}</h3> */}
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Price:</h3>
        {/* <h3>{order?.data?.[0]?.final_total}</h3> */}
        <h5>14000</h5>
      </div>
    </div>

    {/*shipment detail here */}
    <div>
    <h1 className="font-semibold text-xl text-[#080808]">Shipment Details</h1>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">product name:</h3>
        {/* <h3>{order?.data?.[0]?.order_lines[0]?.product?.name}</h3> */}
        <h5>Book</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Qty:</h3>
        {/* <h3>{order?.data?.[0]?.order_lines[0]?.qty}</h3> */}
        <h5>5</h5>
      </div>
    </div>

      {/* delivery location here */}
      <div>
      <h1 className="font-semibold text-xl text-[#080808]">Delivery Location</h1>
      </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Customer Name</h3>
        {/* <h3>{order?.data?.[0]?.customer?.name}</h3> */}
        <h5>xyz</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Customer Phone</h3>
        {/* <h3>{order?.data?.[0]?.customer?.mobile_no}</h3> */}
        <h5>123456789</h5>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#080808]">Address:</h3>
       {/* <h3>{order?.data?.[0]?.address}</h3> */}
       <h5>Lahore</h5>
      </div>

    </div>
  </div>
  )
}

export default page
