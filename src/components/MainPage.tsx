import Header from "./Header";
import Form from "./Form";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="w-[40vw] p-6  mb-2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
