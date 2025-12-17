function onClicking() {
  console.log("Hello");
}

export default function Button() {
  return (
    <div>
      <button onClick={onClicking}>Click me!</button>
    </div>
  );
}
