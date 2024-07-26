import { Button, Descriptions, Input } from "antd";
import { IFormData } from "./Form";

interface IPageThree {
  formData: IFormData | undefined;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  moveToPrev: () => void;
}
const PageThree: React.FC<IPageThree> = ({
  formData,
  setFormData,
  moveToPrev,
}) => {
  const config = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Phone Number", key: "phone_num" },
    { label: "Email", key: "email" },
    { label: "PAN Number", key: "pan_num" },
    { label: "GST Number", key: "gst_num" },
    { label: "Aadhaar Number", key: "aadhaar_num" },
  ];

  return (
    <div className="text-start">
      <div className="bg-gray-200 rounded border p-4">
        <div className="text-center bg-white rounded p-2 mb-4">
          Confirm User Details
        </div>
        <ul>
          {config.map((field: { label: string; key: string }) => {
            return (
              <li>
                <label className="w-[35%] text-start text-base p-2 ml-3 inline-block">
                  {field?.label}:
                </label>
                <div className="text-base inline-block">
                  {formData && formData[field?.key as keyof IFormData]}
                </div>
              </li>
            );
          })}
        </ul>

        <div></div>
      </div>
      <Button
        className="mt-8 m-4 text-blue-500 border border-blue-500"
        onClick={moveToPrev}
      >
        Back
      </Button>
    </div>
  );
};

export default PageThree;
