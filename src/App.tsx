import { useQuery } from '@apollo/client';
import { TestQuery, ITestQuery } from './Api/Test';

function App() {
  const { data, loading } = useQuery<ITestQuery>(TestQuery);

  if (loading) return <p>Loading...</p>;

  return <div>{data?.company.name}</div>;
}

export default App;
