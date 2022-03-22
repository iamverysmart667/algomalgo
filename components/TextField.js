function TextField(props) {
  return (
    <>
      <div className="font-sans w-full p-1 text-gray-500">
        {props.label} <br/>
        {props.password
          ? <input type="password" className="w-full rounded-2xl h-10 bg-gray-50 p-2"/>
          : <input type="text" className="w-full rounded-2xl h-10 bg-gray-50 p-2"/>
        }
      </div>
    </>
  )
}

export default TextField;