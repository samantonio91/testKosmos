const Form = ({ item }) => {
  console.log('ga', item);
  if (item.type === "Text")
    return (
      <>
        <label
          className='block text-gray-700 text-sm font-bold mb-[0.5rem]'
        >
          {item.label}
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='label'
          type='text'
          placeholder='label'
          // onChange={(e)=> handleInputFormCreator('label', e.target.value, item.index)}
        />
      </>
    );
  else if (item.type === "Select")
    return (
      <div className='inline-block relative w-full mb-[0.5rem]'>
        <label
          className='block text-gray-700 text-sm font-bold mb-[0.5rem]'
        >
          {item.label}
        </label>
        <select
          // onChange={(e)=> {
          //   handleInputFormCreator('type', e.target.value, item.index)
          // }}
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        >
          <option>Tipe of input</option>
          <option value='Text'>Text</option>
          <option value='Select'>Select</option>
          <option value='Option'>Option</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
    );
  else if (item.type === "Option") return <p>kmlkm</p>;
};

export default Form;
