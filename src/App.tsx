import { KeyboardEvent, useEffect, useRef, useState } from "react";

type TodoItem = {
  checked: boolean;
  content: string;
};

const App = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodoList([
      {
        checked: true,
        content: "아침에 일어나기",
      },
    ]);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickWrite = () => {
    const value = inputRef?.current?.value;
    if (value) {
      setTodoList((prev) => [...prev, { checked: false, content: value }]);
      inputRef.current.value = "";
    }
  };

  const onEnterInputTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter`) {
      onClickWrite();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <section>
        <input type="text" ref={inputRef} onKeyDown={onEnterInputTodo} />
        <button type="button" onClick={onClickWrite}>
          작성
        </button>
        <ul>
          {todoList.map((item, index) => {
            const { checked, content } = item;
            const id = `CHECKED_${index}`;
            return (
              <li key={content}>
                <div className="bg-red-500 border border-black">
                  <label htmlFor={id} />
                  <input type="checkbox" checked={checked} name="" id={id} />
                  <div>{content}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
