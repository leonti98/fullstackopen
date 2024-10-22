const App = (props) => {
  const { notes } = props;
  console.log(notes);
  const result = notes.map((note) => <li key={note.id}>note.content</li>);
  console.log(result);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
