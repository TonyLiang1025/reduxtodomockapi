import { useEffect, useState } from "react";

const MockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ enablleCount: true, cnt: 10 });
    }, 1000);
  });
};

const Counter = () => {
  const [count, setCount] = useState({ enablleCount: false, cnt: 0 });

  useEffect(() => {
    const fetchDate = async () => {
      const newData = await MockApi();
      setCount(newData);
    };
    fetchDate();
  }, []);

  useEffect(() => {
    document.title = `You have cliked ${count.cnt} times`;
  }, [count.cnt]);

  const calcNewCount = (isAdd) => {
    if (!count.enablleCount) {
      return;
    }
    if (isAdd) {
      setCount({ enablleCount: true, cnt: count.cnt + 1 });
    } else {
      setCount({ enablleCount: true, cnt: count.cnt - 1 });
    }
  };

  return (
    <div>
      <p>You have click {count.cnt} times</p>
      <button
        onClick={() => {
          calcNewCount(true);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          calcNewCount(false);
        }}
      >
        Remove
      </button>
      <button onClick={() => setCount({ ...count, ...{ enablleCount: true } })}>
        EnableCounter
      </button>
    </div>
  );
};

export default Counter;
