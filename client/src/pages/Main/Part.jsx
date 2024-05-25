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
    <div className="bg-page-bg">
      <div className="flex flex-col gap-4 text-black  px-3 pt-3 xl:flex-row lg:justify-center max-w-[1200px] mx-auto">
        {/* UPPER SECTION --> IMAGE AND DESCRIPTION*/}
        <div className="h-fit flex flex-col gap-12 items-center px-4 bg-white shadow-xl py-4 xl:max-w-[800px] md:rounded-2xl 2xl:flex-row">
          <ImageSection />
          <Description />
        </div>

        <div className="flex flex-col gap-4 flex-grow xl:max-w-[350px]">
          {/* LOWER SECTION --> BULK PRICES AND DIFFERENT DISTRIBUTORS*/}
          <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default Part;
