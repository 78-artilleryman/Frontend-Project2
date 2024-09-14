"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 5,
            refetchOnWindowFocus: false, // 창 포커스 시 자동으로 다시 패칭 안 함
            retry: 2, // 실패 시 2번 재시도
          },
          mutations: {
            retry: 1, // 뮤테이션 실패 시 1번 재시도
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <SessionProvider>{children}</SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};
