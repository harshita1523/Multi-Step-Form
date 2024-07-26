import { Button, Input } from "antd";
import { IFormData } from "./Form";

interface IPageTwo {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  moveToPrev: () => void;
  moveToNext: () => void;
}
const PageTwo: React.FC<IPageTwo> = ({
  formData,
  setFormData,
  moveToPrev,
  moveToNext,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <div className="text-sm text-center w-full">
        <label className="w-[30%] text-start  inline-block">
          GST No &nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="Enter GST Number"
          name="gst_num"
          value={formData?.gst_num}
          onChange={handleChange}
        />
        <br /> <br />
        <label className="w-[30%] text-start  inline-block">
          PAN No&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="Enter PAN Number"
          name="pan_num"
          value={formData?.pan_num}
          onChange={handleChange}
        />
        <br /> <br />
        <label className="w-[30%] text-start  inline-block">
          Aadhaar Card Number&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="enter you aadhaar number"
          name="aadhaar_num"
          value={formData?.aadhaar_num}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between  w-[75%] m-auto">
        <Button
          className="mt-8 m-4 text-blue-500 border border-blue-500"
          onClick={moveToPrev}
        >
          Back
        </Button>
        <Button
          className="mt-8 m-4 text-blue-500 border border-blue-500"
          onClick={moveToNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PageTwo;
