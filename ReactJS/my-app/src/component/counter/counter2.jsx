import { useEffect, useState } from "react";

export const Counter2 = ({ name }) => {
  const [count, setCount] = useState(0); //gia tri mac dinh cua state, gia tri mac dinh cua phan tu 1
  const [loading, setLoading] = useState(true);
//props la gia tri tu cha truyen xuong, state thay doi dc con props ko doi dc
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      setLoading("aaa")
    }, 3000);
  }, [loading, count]);

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };
  console.log("re-render");
  return (
    <div>
      {loading === true ? (
        <div>Loadinggg2</div>
      ) : (
        <>
          
          <h1>Hello {name}</h1>
          <button
            onClick={() => onDecrease()}
            style={{ width: 60, height: 30 }}
          >
            -
          </button>
          <span style={{ marginLeft: 30, marginRight: 30 }}>{count}</span>
          <button
            onClick={() => onIncrease()}
            style={{ width: 60, height: 30 }}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};
