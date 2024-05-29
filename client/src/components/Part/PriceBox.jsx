/* eslint-disable react/prop-types */
// COMPONENTS
import { FaShapes, FaSearchDollar } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';

const PriceBox = ({ parts, img }) => {
  console.log(parts);

  function removeRupeeSign(price) {
    const numberString = price.replace(/[^0-9.]/g, '');
    return parseFloat(numberString);
  }

  function formatPriceWithCommas(price) {
    const number = Number(price);
    if (isNaN(number)) {
      return price;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
    }).format(number);
  }
  return (
    <div className="bg-white shadow-xl">
      {/* Price Box Header */}
      <div className="flex justify-between p-4 px-2 border border-solid border-[#B4B4B4] border-b-0">
        {/* BULK TEXT AND ICON */}
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-base">Bulk Pricing</p>
          <FaShapes className="text-red-600" />
        </div>

        {/* DISTRIBUTOR */}
        <div className="flex gap-2 items-center">
          <div className="max-w-[60px]">
            <img src={img} alt="" />
          </div>
          <FaSearchDollar className="text-red-600 text-xl" />
        </div>
      </div>

      {/* PRICE TABLE */}
      <table className="w-full">
        <thead>
          <tr className="text-xs">
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              QUANTITY
            </th>
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              UNIT PRICE
            </th>
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              EXT PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          {parts &&
          parts[1].distributor &&
          parts[1].distributor === import.meta.env.VITE_DIGIKEY
            ? parts[0].ProductVariations &&
              parts[0].ProductVariations.map((variation, variationIndex) =>
                variation.StandardPricing.map((pricing, pricingIndex) => {
                  return (
                    <tr key={`${variationIndex}-${pricingIndex}`}>
                      <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                        <div className="flex gap-2 items-center">
                          {pricingIndex === 0 && (
                            <BsBoxSeam className="text-sm text-red-600" />
                          )}
                          {/* <p>{pricing.BreakQuantity}</p> */}
                          <p>
                            {new Intl.NumberFormat('en-US', {}).format(
                              pricing.BreakQuantity
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                        {formatPriceWithCommas(pricing.UnitPrice)}
                      </td>
                      <td className="text-xs text-end border-solid border-[#B4B4B4] border p-2">
                        {formatPriceWithCommas(pricing.TotalPrice)}
                      </td>
                    </tr>
                  );
                })
              )
            : parts[1].distributor &&
              parts[1].distributor === import.meta.env.VITE_MOUSER
            ? parts[0].PriceBreaks &&
              parts[0].PriceBreaks.map((prcBreaks, prcIndex) => {
                console.log(prcBreaks);
                console.log(
                  formatPriceWithCommas(
                    prcBreaks.Quantity * removeRupeeSign(prcBreaks.Price)
                  )
                );
                return (
                  <tr key={prcIndex}>
                    <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                      <div className="flex gap-2 items-center">
                        {prcIndex === 0 && (
                          <BsBoxSeam className="text-sm text-red-600" />
                        )}
                        <p>
                          {new Intl.NumberFormat('en-US', {}).format(
                            prcBreaks.Quantity
                          )}
                        </p>
                      </div>
                    </td>
                    <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                      {formatPriceWithCommas(removeRupeeSign(prcBreaks.Price))}
                    </td>
                    <td className="text-xs text-end border-solid border-[#B4B4B4] border p-2">
                      {formatPriceWithCommas(
                        prcBreaks.Quantity * removeRupeeSign(prcBreaks.Price)
                      )}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default PriceBox;
