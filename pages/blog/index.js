import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

export default function Index({ data }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CODE.io | Article</title>
      </Head>
      <div className='container'>
        <div className="text-center my-4 row">
          <h1>Bienvenue sur le Blog</h1>
          <p className='text-secondary'>Voici les article</p>
        </div>
        <div className="row">
        {
          data.map(article => (
            <div key={article.id}  className='col-sm-6 col-12 col-xl-4 mb-3'>
              <div className="card w-100 h-100">
                <div className="card-body">
                  <h5 className='card-title'>{article.title}</h5>
                  <p className='card-text'>{article.body.slice(0,20)+ '...'}</p>
                  <Link href={`/blog/${article.id.toString()}`}>
                    <a className='card-link'>Lire cette article</a>
                  </Link>
                </div>
              </div>
          </div>
          ))
        }
          </div>
      </div>
      
    </>
  )
}

export async function getStaticProps() {
    const article = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await article.json();

    return {
        props: {
            data
        }
    }
}

