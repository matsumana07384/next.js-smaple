import Link from 'next/link'

export default function FirstPost() {
  return (
    <div className="blog-contents">
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <style jsx>{`
      .blog-contents {
        background: yellow;
      }
      `}</style>
    </div>
  )
}
