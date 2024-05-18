export default function Wrapper(
  WrappedComponent: () => JSX.Element,
  className: string
) {
  // HOC return the Method
  return (props: object) => {
    //   return the JSX in here
    return (
      <div className={className}>
        {/* pass all props to exported Components */}
        <WrappedComponent {...props} />
      </div>
    );
  };
}
