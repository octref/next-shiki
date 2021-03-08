import React from 'react'
import * as shiki from 'shiki'

export default function Home(props) {
  return <div className="container">
      <pre dangerouslySetInnerHTML={{ __html: props.code }} />
      <style jsx global>{`
        body {
          background-color: #fff;
        }
      `}</style>
    </div>
}

export async function getStaticProps() {
  const highlighter = await shiki.getHighlighter({
    theme: 'github-light'
  })
  return {
    props: {
      code: highlighter.codeToHtml(
        `import React from 'react';`,
        'js'
      )
    }
  }
}
