import { cookies } from "next/headers";

type CookieData = {
  name: string;
  value: string;
};

export async function getCookieData(): Promise<CookieData | undefined> {
  return new Promise(resolve =>
    setTimeout(() => {
      // 쿠키를 비동기적으로 가져오며, 쿠키의 값이 undefined일 수도 있습니다.
      const cookie = cookies().get("next-auth.session-token");
      if (cookie) {
        // 쿠키가 있을 경우, name과 value를 포함하는 객체를 반환합니다.
        resolve({ name: cookie.name, value: cookie.value });
      } else {
        // 쿠키가 없을 경우, undefined를 반환합니다.
        resolve(undefined);
      }
    }, 1000)
  );
}
