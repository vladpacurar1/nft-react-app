import SponsorItem from "../SponsorItem";
import LogoAMT from "../../assets/amt-logo.png";
import LogoSp from "../../assets/sp-logo.png";
import "./style.css";

function SponsorItemList() {
  return (
    <div className="sponsor-item-list">
      <SponsorItem logo={LogoAMT} text="Arad MTB Trophy" />
      <SponsorItem logo={LogoSp} text="Sport Competition" />
      <SponsorItem logo={LogoAMT} text="Arad MTB Trophy" />
      <SponsorItem logo={LogoSp} text="Sport Competition" />
    </div>
  );
}

export default SponsorItemList;
