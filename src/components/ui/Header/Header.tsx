import CenterMenu from "./CenterMenu";
import Logo from "./Logo";
import RightMenu from "./RightMenu";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Logo />
      <CenterMenu />
      <RightMenu />
    </div>
  );
}
