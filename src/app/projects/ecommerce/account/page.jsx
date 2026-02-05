import AccountSidebar from "@/components/account/AccountSidebar";

export default function AccountDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
      <AccountSidebar />
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold">My Account</h1>
      </div>
    </div>
  );
}
