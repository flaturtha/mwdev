import { useEffect, useState } from 'react';
import Spinner from '~/components/Spinner';

export default function DummyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1-second load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">Welcome to the Dummy Page!</h1>
          <p className="mt-4">This is a demonstration of the loading spinner.</p>
        </div>
      )}
    </div>
  );
} 