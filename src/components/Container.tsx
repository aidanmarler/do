const Container = ({
    children,
    title,
  }: {
    children: JSX.Element | JSX.Element[];
    title?: string;
  }) => {
    return (
      <div className="bg-zinc-900 border border-zinc-500 p-4 shadow-cont rounded-md">
        {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
        <div>{children}</div>
      </div>
    );
  };
  
  export default Container;