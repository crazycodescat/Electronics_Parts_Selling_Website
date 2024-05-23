// COMPONENTS
import ImageSection from '../../components/Part/ImageSection';
import Description from '../../components/Part/Description';
import PriceBox from '../../components/Part/PriceBox';
import LowestPriceBox from '../../components/Part/LowestPriceBox';
import AddToCart from '../../components/Part/AddToCart';

const priceTableData = [
  {
    img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif',
  },
  {
    img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp',
  },
  {
    img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1716462279/Electronics%20Parts%20Listing%20Website/a87l8zycoovudqzamjjd.svg',
  },
];

const Part = () => {
  return (
    <div className="text-black bg-page-bg px-3 pt-3 flex flex-col gap-4">
      {/* UPPER SECTION --> IMAGE AND DESCRIPTION*/}
      <div className="flex flex-col gap-12 items-center px-4 bg-white shadow-xl py-4">
        <ImageSection />
        <Description />
      </div>

      {/* LOWER SECTION --> BULK PRICES AND DIFFERENT DISTRIBUTORS*/}
      <div className="flex flex-col gap-4 bg-white">
        {priceTableData.map((data, i) => {
          return <PriceBox key={i} img={data.img} />;
        })}
      </div>

      {/* LOWEST PRICE SECTION */}
      <div>
        <LowestPriceBox />
      </div>

      {/* ADD TO CART SECTION */}
      <div className="bg-white p-3">
        <AddToCart />
      </div>
    </div>
  );
};

export default Part;
