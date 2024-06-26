import { Button } from '@headlessui/react';
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

  return (
    <div>
      {data}
      <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">save changes adsfasdfasdgadghads</Button>  
    </div>)
}

export default App;
