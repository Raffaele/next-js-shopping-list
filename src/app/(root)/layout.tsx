import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-5">
      <header className="flex justify-between">
        <h2>Shop list</h2>
        <Link href="/shop/new">Create</Link>
      </header>
      <hr className="mb-5" />
      {children}
    </div>
  );
};

export default HomeLayout;
