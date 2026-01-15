import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`;
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [updatedData, setUpdatedData] = useState(data);
  const [page, setPage] = useState(0);
  const [loding, setLoading] = useState(false);
  const [limit, setLimit] = useState();

  useEffect(() => {
    fetchUserData();
  }, [page, searchValue]);

  const fetchUserData = () => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        const filterData = searchValue
          ? res?.filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
          : res;
        setUpdatedData(filterData);
        setLimit(10);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSearch = (val) => {
    setSearchValue(val);
  };

  return (
    <>
      {loding ? (
        <h1> Loading....</h1>
      ) : (
        <div>
          <h6> Search</h6>
          <input
            type="text"
            placeholder="type..."
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
          />

          <table>
            <tr>
              <th>Title</th>
              <th>Id</th>
            </tr>
            {updatedData?.map((item) => (
              <tr>
                <td>{item.title}</td>

                <td>{item?.id}</td>
              </tr>
            ))}
          </table>
          {Array.from({ length: limit })?.map((item, index) => (
            <button onClick={() => setPage(index)}> {index} </button>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
