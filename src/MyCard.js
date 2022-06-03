export function MyCard(props) {
  const { title, children } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  );
}
