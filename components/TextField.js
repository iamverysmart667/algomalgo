function TextField(props) {
  return (
    <>
      <div className="font-sans w-full p-1 text-gray-500">
        <p className="text-base">{props.label}</p>
        {props.password
          ? <input type="password" name={props.name} className="w-full rounded-2xl bg-gray-50 p-2 h-12"/>
          : <input type="text" name={props.name} className="w-full rounded-2xl bg-gray-50 p-2 h-12"/>
        }
      </div>
    </>
  )
}

export default TextField;