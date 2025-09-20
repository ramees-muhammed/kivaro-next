import Blob from "@/components/ui/Blob";
import Consultation from "@/sections/home/Consultation";
import HomeBanner from "@/sections/home/HomeBanner";
import HomeServices from "@/sections/home/HomeServices";
import Sectors from "@/sections/home/Sectors";
import WhyKivaro from "@/sections/home/WhyKivaro";

export default async function Home() {

  return (
    <main className="home_page section-gap">
      <Blob/>
      <HomeBanner/>
      <HomeServices/>
      <WhyKivaro/>
      <Sectors/>
      <Consultation/>
    </main>
  );
}


// import { fetchPosts } from "../../lib/api";

// export default async function Home() {
//   const posts = await fetchPosts();

//   return (
//     <main className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold">Latest Posts</h1>
//       <ul className="mt-6 space-y-4">
//         {posts.map((post: any) => (
//           <li key={post.id} className="p-4 bg-gray-100 rounded-lg shadow">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
