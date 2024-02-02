import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts } from "contentlayer/generated"

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <main className="flex items-center  justify-center">
      <div className=" prose dark:prose-invert ">
        {posts.map((post) => (
          <article key={post._id}>
            <Link href={post.url}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </main>
  )
}
