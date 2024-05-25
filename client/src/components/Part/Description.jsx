import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa6';
const Description = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-xl font-black">EE-1006</h1>
          {/* WRAPPER */}
          <div className="flex gap-4">
            <div className="w-[400px]">
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Part Number</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Manufacturer</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Manufacturer Product Number</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Description</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">EDA/CAD Models</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Datasheet</h3>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>EE-1006</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>Omron Automation and Safety</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>EE-1006</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>CONNECTOR W/2M CABLE FOR OPTO</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>EE-1006 Models</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>Datasheet</h3>
                <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full font-Inter md:hidden">
        <h1 className="text-xl font-black">EE-1006</h1>
        <div className="flex flex-col gap-6 mt-8 font-medium">
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Part Number</h6>
              <h6 className="text-desc-color">EE-1006</h6>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Manufacturer</h6>
              <h6 className="text-blue-700 hover:underline cursor-pointer">
                Omron Automation and Safety
              </h6>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">
                Manufacturer Product Number
              </h6>
              <h6 className="text-desc-color">EE-1006</h6>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Description</h6>
              <h6 className="text-desc-color">CONNECTOR W/2M CABLE FOR OPTO</h6>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">EDA/CAD Models</h6>
              <h6 className="text-desc-color">EE-1006 Models</h6>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Datasheet</h6>
              <div className="flex items-center gap-2">
                <BsFileEarmarkPdfFill className="text-red-600" />
                <h6 className="text-blue-700 cursor-pointer hover:underline">
                  Datasheet
                </h6>
              </div>
            </div>
            <div className="">
              <FaRegCopy className="text-blue-800 hidden group-hover:block cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
