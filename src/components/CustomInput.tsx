import { Input } from "antd";

const CustomInput = ({ data }: any) => {
  return (
    <div>
      <label>{data.label}</label>
      <Input width={data.width} />
    </div>
  );
};

export default CustomInput;
