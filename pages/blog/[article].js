import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'

export default function article({ data }) {
  console.log(data)
  if (!data) {
    return (
      <div className='container my-5'>
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CODE.io | {data.title}</title>
      </Head>
      <div className='container my-4'>
        <h1 className='my-3'>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  )
}


export async function getStaticProps(ctx) {
    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.article}`);
    const data = await article.json();

  if (data === undefined) {
    return {
        notFound: true
      }
    }
    return {
        props: {
            data
        }
    }
}


export async function getStaticPaths() {
    const article = await fetch('https://jsonplaceholder.typicode.com/posts');
    return {
      paths: [
          {params: {article: '1'}}
      ],
      fallback: true
    }
}