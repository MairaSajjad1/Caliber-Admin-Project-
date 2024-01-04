import UsersTable from "./_components/user-table";

const page = () => {
  return (
    <div className="rounded-xl p-4 overflow-hidden bg-gradient-to-br from-white via-white to-white/40">
      <UsersTable />
    </div>
  );
};

export default page;
