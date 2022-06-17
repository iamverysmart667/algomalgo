export function Card({title, children, style, width = 'full'}) {
  return (
    <div className={`flex flex-col w-${width} rounded-2xl shadow-2xl bg-white p-4 overflow-auto`}>
      <p className={'text-gray-400'}>{title}</p>
      <div className={`flex w-full ${style}`}>
        {children}
      </div>
    </div>
  );
}