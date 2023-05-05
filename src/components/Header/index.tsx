import Logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <header className="flex items-center flex-col justify-center my-20">
      <img src={Logo} alt="logo" className="object-cover" />
      <h1 className="text-6xl text-white mt-20 font-bold tracking-[-1.43px]">
        Seu{" "}
        <span className="bg-nlwGradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
    </header>
  );
};
