import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await fetch(`api/message`);
      let text = await response.json();
      setData(text);
    })();
  });
  
  return <div>{data}</div>
}

export default App;
