import { Button, Input } from "antd";
import { IFormData } from "./Form";

interface IPageOne {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  moveToNext: () => void;
}
const PageOne: React.FC<IPageOne> = ({ formData, setFormData, moveToNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="text-end">
      <div className="text-sm text-center w-full">
        <label className="w-[30%] text-start  inline-block">
          First Name&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="Enter First Name"
          name="first_name"
          value={formData?.first_name || ""}
          onChange={handleChange}
        />
        <br /> <br />
        <label className="w-[30%] text-start  inline-block">
          Last Name&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="Enter Last Name"
          name="last_name"
          value={formData?.last_name || ""}
          onChange={handleChange}
        />
        <br /> <br />
        <label className="w-[30%] text-start  inline-block">
          Phone Number&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="+91XXXXXXXX"
          name="phone_num"
          inputMode="numeric"
          value={formData?.phone_num}
          onChange={handleChange}
        />
        <br /> <br />
        <label className="w-[30%] text-start  inline-block">
          Email&nbsp;:{" "}
        </label>
        <Input
          className="w-[40%]"
          placeholder="abc@gmail.com"
          name="email"
          value={formData?.email ?? ""}
          onChange={handleChange}
        />
      </div>
      <Button
        className="mt-8 m-4 text-blue-500 border border-blue-500"
        onClick={moveToNext}
      >
        Next
      </Button>
    </div>
  );
};

export default PageOne;
