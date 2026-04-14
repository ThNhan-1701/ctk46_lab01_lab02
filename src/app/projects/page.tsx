import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
 return (
 <section className="max-w-6xl mx-auto px-4 py-12">
 <header className="mb-8">
 <h1 className="text-3xl font-bold mb-2">Dự án</h1>
 <p className="text-gray-600">
 Một số bài tập và đồ án mình đã thực hiện trong quá trình học tập.
 </p>
 </header>

 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
 {projects.map((project, index) => (
 <article
 key={project.id}
 className={`group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
 index === 0 ? "sm:col-span-2 xl:col-span-1" : ""
 }`}
 >
 <div className="mb-4 flex items-center justify-between gap-3">
 <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
 {project.date}
 </span>
 <span className="text-xs text-gray-500">
 {project.tech.length} công nghệ
 </span>
 </div>

 <Link href={`/projects/${project.id}`}>
 <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
 {project.title}
 </h2>
 </Link>

 <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>

 <div className="flex flex-wrap gap-2 mb-6">
 {project.tech.map((t) => (
 <span
 key={t}
 className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
 >
 {t}
 </span>
 ))}
 </div>

 <Link
 href={`/projects/${project.id}`}
 className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
 >
 Xem chi tiết
 </Link>
 </article>
 ))}
 </div>
 </section>
 );
}