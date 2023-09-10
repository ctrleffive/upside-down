import "./style.css"

interface Props {
  onReady: VoidFunction,
}

export const LogoIntro = (props: Props) => {
  console.log(props);

  return (
    <div className="flex items-center justify-center fixed inset-0">
      <div className="logo-mask bg-[url('/assets/intro-bg.jpg')] bg-cover absolute inset-0" />
      <img src="/logo.svg" className="w-[200px] logo-mask-reveal" alt="" />
      {/* <div className="flex flex-col items-center justify-center absolute mt-[250px]">
        <div className="cursor-pointer">About Us</div>
      </div> */}
    </div>
  );
};
