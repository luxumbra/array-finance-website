import { useState, useEffect } from "react";

interface FetchProps {
  data: Array<string>;
  loading: boolean;
}
function useFetch(url) {
  const [data, setData] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json()
      .then(data => {
        console.log(data);
        debugger;
        setData(data.result[0]);
        setLoading(false);
      })
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };
