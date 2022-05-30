import Form from "../components/Form";
const FormCreator = ({formsCreator, addInputFormCreator, handleInputFormCreator}) => {
  return (
    <div className='w-full max-w-md bg-blue mx-auto'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-[2rem]'>
        {formsCreator && formsCreator.map((item) => (
          <Form key={item.index} item={item} handleInputFormCreator={handleInputFormCreator} />
        ))}
        <button onClick={() => addInputFormCreator()}>agregar</button>
      </div>
    </div>
  );
};

export default FormCreator;
