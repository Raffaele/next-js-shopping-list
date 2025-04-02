import Link from "next/link";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <hr className="my-6" />
      {children}
    </div>
  );
};

export default PagesLayout;
