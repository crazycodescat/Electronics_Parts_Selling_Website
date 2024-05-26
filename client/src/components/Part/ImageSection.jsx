const ImageSection = ({ products }) => {
  return (
    <div className="font-Inter max-w-[250px] md:ml-10 min-w-[100px]">
      <img src={products ? products[0].parts[0].PhotoUrl : null} alt="" />
      <p className="text-xs text-neutral-400 text-center">
        Image shown is a representation only. Exact specifications should be
        obtained from the product data sheet.
      </p>
    </div>
  );
};

export default ImageSection;
