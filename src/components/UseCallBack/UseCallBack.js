import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const List = React.memo(({ list, onRemove }) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log('Render: ListItem');
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

function UseCallBack(props) {
  console.log('Render: App');
  const [users, setUsers] = React.useState([
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
  ]);

  const [text, setText] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
  //By passing this new callback handler as a prop to the List component, 
  //it notices a prop changed compared to the previous render. 
  //That's why the re-render for the List and ListItem components kicks in.

  //Finally we have our use case for React's useCallback Hook. 
  //We can use useCallback to memoize a function, which means that this function only gets re-defined if any of its dependencies in the dependency array change:

  const handleRemove = React.useCallback(
    (id) => setUsers(users.filter((user) => user.id !== id)),
    [users]
  );

  return (   
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
      <List list={users} onRemove={handleRemove} />
    </div>
  );
}

export default UseCallBack;
