export default function App() {
  const { templateProps = {} } = window;
  return (
    <div>
      <p>Hello: {templateProps.name}!</p>
    </div>
  );
}
