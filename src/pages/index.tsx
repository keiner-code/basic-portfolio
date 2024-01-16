import Article from "@/components/article";
import Aside from "@/components/aside";
export default function Home() {
  return (
    <>
    <main className="flex bg-[rgb(15,23,42)]  justify-center text-white">
      <div className="flex w-9/12">
        <aside className="w-1/2 flex items-center h-screen">
          <div className="fixed flex items-center h-full">
            <Aside />
          </div>
        </aside>
        <article className="w-1/2 flex items-center h-full">
          <Article />
        </article>
      </div>
    </main>
     <footer className="bg-[rgb(15,23,42)] text-gray-400 py-2">
     <p className="text-center">
       Loosely designed in Figma and coded in Visual Studio Code by yours
       truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
       All text is set in the Inter typeface.
     </p>
   </footer>
    </>
  );
}
