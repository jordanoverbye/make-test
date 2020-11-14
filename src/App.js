export default function App() {
  const { templateProps = {} } = window;
  return (
    <div style={{ backgroundColor: "red", padding: 200 }}>
      <p>Hello: {templateProps.name}!</p>
    </div>
  );
}
