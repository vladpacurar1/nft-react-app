import "./style.css";
import Nft1 from "../../assets/nft-15941.png";
import Nft2 from "../../assets/nft-16941.png";
import Nft3 from "../../assets/nft-17941.png";
import Nft4 from "../../assets/nft-18941.png";
import NftCard from "../NftCard";

export const nfts = [
  {
    image: Nft1,
    name: "Vlad1",
    price: "1,23",
    daysLeft: 23,
    number: 11381,
  },
  {
    image: Nft2,
    name: "Vlad2",
    price: "1,76",
    daysLeft: 20,
    number: 56295,
  },
  {
    image: Nft3,
    name: "Vlad3",
    price: "1,12",
    daysLeft: 17,
    number: 82947,
  },
  {
    image: Nft4,
    name: "Vlad4",
    price: "2,01",
    daysLeft: 25,
    number: 43234,
  },
];

function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft, i) => {
        return (
          <NftCard
            key={i}
            image={nft.image}
            name={nft.name}
            price={nft.price}
            daysLeft={nft.daysLeft}
            number={nft.number}
          />
        );
      })}
    </div>
  );
}

export default NftCardList;
