import ShipmentTable from "@/components/table/shipment-table";

const Customers = () => {
  return (
    <div className="bg-white py-4 pl-4 pr-8  rounded-xl  overflow-hidden bg-gradient-to-br from-white via-white to-white/40">
      {/* <Title>Active Users</Title> */}
      <ShipmentTable />
    </div>
  );
};

export default Customers;
