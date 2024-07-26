import { Button } from "antd";
import PageOne from "./PageOne";
import { useState } from "react";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

export interface IFormData {
  first_name: string;
  last_name: string;
  phone_num: number | undefined;
  email: string;
  pan_num: string;
  gst_num: string;
  aadhaar_num: string;
}
const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    first_name: "",
    last_name: "",
    phone_num: undefined,
    email: "",
    pan_num: "",
    gst_num: "",
    aadhaar_num: "",
  });
  const [currPage, setCurrPage] = useState(1);
  const moveToNext = () => {
    setCurrPage((curr) => curr + 1);
  };
  const moveToPrev = () => {
    setCurrPage((curr) => curr - 1);
  };

  switch (currPage) {
    case 1:
      return (
        <PageOne
          formData={formData}
          setFormData={setFormData}
          moveToNext={moveToNext}
        />
      );
    case 2:
      return (
        <PageTwo
          formData={formData}
          setFormData={setFormData}
          moveToPrev={moveToPrev}
          moveToNext={moveToNext}
        />
      );
    case 3: {
      return (
        <PageThree
          formData={formData}
          setFormData={setFormData}
          moveToPrev={moveToPrev}
        />
      );
    }
    default:
      return <div>Page does not exist</div>;
  }
};
export default Form;
