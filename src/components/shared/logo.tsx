import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-lg font-extrabold flex items-center gap-x-1">
      <Image src="/logo.svg" alt="Logo" width={28} height={28} />
      <p>
        Agile<span className="text-green-500">Arc</span>
      </p>
    </div>
  );
};

export default Logo;
