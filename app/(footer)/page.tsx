// import dynamic from "next/dynamic";

import Container from "@/components/layout/Container";
import CardContent from "@/components/ui/cards/CardContent";
// const ThemeSwitcherButton = dynamic(
//   () =>
//     import("@/components/ui/buttons/ThemeSwitcherButton").then(
//       (module) => module.ThemeSwitcherButton
//     ),
//   {
//     ssr: false,
//   }
// );

const fakeLightnovelData = [
  {
    id: "vfdvvwvwev1",
    image: "/images/test1.jpg",
    title: "Mushoku Tensei - Isekai Ittara Honki Dasu",
    url: "/lightnovels",
    views: 123231231123,
    score: 5.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf1",
      index: "V1 - C2",
    },
  },
  {
    id: "vfdvvwvwev2",
    image: "/images/test3.jpg",
    title: "Kumo Desu Ga Nani Ka",
    url: "/lightnovels",
    views: 123231231123,
    score: 2.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf2",
      index: "V1 - C1",
    },
  },
  {
    id: "vfdvvwvwev3",
    image: "/images/test6.jpg",
    title:
      "Maou Gakuin no Futekigousha ~Shijou Saikyou no Maou no Shiso, Tensei shite Shison tachi no Gakkou e Kayou~",
    url: "/lightnovels",
    views: 123231231123,
    score: 5.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf3",
      index: "V1 - C3",
    },
  },
  {
    id: "vfdvvwvwev4",
    image: "/images/test2.jpeg",
    title: "デスマーチからはじまる異世界狂想曲",
    updated_at: "2024-11-26 07:44:25.374751",
    url: "/lightnovels",
    views: 123231231123,
    score: 7.8,
    content: {
      id: "kvfvdfvdf4",
      index: "V2 - C2",
    },
  },
  {
    id: "vfdvvwvwev5",
    image: "/images/test4.jpeg",
    title: "Overlord",
    updated_at: "2024-11-26 07:44:25.374751",
    url: "/lightnovels",
    views: 123231231123,
    score: 5.8,
    content: {
      id: "kvfvdfvdf5",
      index: "V6 - C2",
    },
  },
  {
    id: "vfdvvwvwev6",
    image: "/images/test5.jpeg",
    title:
      "Ankoku kishi monogatari~Yuusha wo taosu tameni Maou ni Shoukansaremashita~",
    updated_at: "2024-11-26 07:44:25.374751",
    url: "/lightnovels",
    views: 123231231123,
    score: 9.8,
    content: {
      id: "kvfvdfvdf6",
      index: "V1 - C10.5",
    },
  },
]; // 20 phần tử

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-full flex flex-col items-center justify-center">
        <Container withPadding={true}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-fit">
            {fakeLightnovelData.map((item, index) => (
              <CardContent data={item} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
