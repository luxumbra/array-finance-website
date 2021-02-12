import { useState, useEffect } from "react";
import axios from 'axios'

interface FetchProps {
  data: Array<string>;
  loading: boolean;
}
function useFetch(url = ``) {
  const [data, setData] = useState<Array<string>>({});
  const [loading, setLoading] = useState<boolean>(true);
  async function fetchUrl() {
    await axios.get(url)
      .then(response => {
        console.log(response.data.result[0]);
        setData(response.data.result[0]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };
