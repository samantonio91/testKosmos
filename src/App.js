import "./index.css";
import FormCreator from "./pages/FormCreator";
import Form from "./pages/Form";
import useFormCreator from "./hooks/useFormCreator";
function App() {
  const {
    formsCreator,
    error,
    complete,
    addInputFormCreator,
    handleInputFormCreator,
    createForm,
  } = useFormCreator();
  return (
    <div className='App bg-blue h-full py-[2rem]'>
      {complete ? (
        formsCreator &&
        formsCreator.map((item) => (
          <div className='w-full max-w-md bg-blue mx-auto'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-[2rem]'>
              <Form item={item} />
            </div>
          </div>
        ))
      ) : (
        <>
          <FormCreator
            formsCreator={formsCreator}
            addInputFormCreator={addInputFormCreator}
            handleInputFormCreator={handleInputFormCreator}
          />
          <div className='flex flex-col items-center justify-between'>
            <button
              onClick={() => createForm()}
              className='bg-sun mx-auto hover:bg-blue-700 text-white font-bold py-2 px-[1rem] mt-[1rem] rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Crear
            </button>
            <div>{error && <h2>Revisa los campos vacios</h2>}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
