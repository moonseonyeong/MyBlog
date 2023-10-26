'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>찾으시는 게시글이 존재하지 않습니다.</h2>
      <a href='/posts'>목록으로 돌아가기</a>
    </div>
  );
}
