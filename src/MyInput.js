import "./MyInput.css";

export function MyInput(props) {
  const { type, placeholder, children } = props;

  if (type === "checkbox") {
    return (
      <div>
        <input type="checkbox" /> {children}
      </div>
    );
  }

  return (
    <div className="form-floating">
      <input type={type} placeholder={placeholder} className="form-control" />
    </div>
  );
}
