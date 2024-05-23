import { BsFileEarmarkPdfFill } from 'react-icons/bs';

const Description = () => {
  return (
    <div className="w-full font-Inter">
      <h1 className="text-xl font-black">EE-1006</h1>
      <div className="flex flex-col gap-6 mt-8 font-medium">
        <div className="flex flex-col text-black text-xs">
          <h6 className="">Part Number</h6>
          <h6 className="text-desc-color">EE-1006</h6>
        </div>
        <div className="flex flex-col text-black text-xs">
          <h6 className="">Manufacturer</h6>
          <h6 className="text-blue-700 hover:underline cursor-pointer">
            Omron Automation and Safety
          </h6>
        </div>
        <div className="flex flex-col text-black text-xs">
          <h6 className="">Manufacturer Product Number</h6>
          <h6 className="text-desc-color">EE-1006</h6>
        </div>
        <div className="flex flex-col text-black text-xs">
          <h6 className="">Description</h6>
          <h6 className="text-desc-color">CONNECTOR W/2M CABLE FOR OPTO</h6>
        </div>
        <div className="flex flex-col text-black text-xs">
          <h6 className="">Datasheet</h6>
          <div className="flex items-center gap-2">
            <BsFileEarmarkPdfFill className="text-red-600" />
            <h6 className="text-blue-700 cursor-pointer hover:underline">
              Datasheet
            </h6>
          </div>
        </div>
        <div className="flex flex-col text-black text-xs">
          <h6 className="">EDA/CAD Models</h6>
          <h6 className="text-desc-color">EE-1006 Models</h6>
        </div>
      </div>
    </div>
  );
};

export default Description;
