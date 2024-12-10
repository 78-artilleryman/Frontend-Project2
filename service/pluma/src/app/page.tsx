import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-custom-Page-gradient flex h-screen w-screen flex-col items-center">
      <h1 className="text-whiteAlpha-900 mb-6 mt-[200px] text-6xl">웹소설 작가들을 위한 Editor Pluma</h1>
      <h3 className="text-whiteAlpha-900 text-2xl">편리한 작업을 위한 Pluma를 소개합니다.</h3>
      <h3 className="text-whiteAlpha-900 text-2xl">AI와 함께 작업 속도를 올려보세요!</h3>
      <Link href="/signin">
        <button className="text-whiteAlpha-900 mt-[50px] w-[250px] rounded-3xl bg-blue-400 py-3 text-lg">
          작업하러 가기
        </button>
      </Link>
      <div className="absolute bottom-0">
        <Image src="/image/main.svg" alt="메인페이지 이미지" width={1000} height={450} />
      </div>
    </main>
  );
}
