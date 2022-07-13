import React from 'react'
import Head from 'next/head'

export default function Citation({ data }) {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CODE.io | Citation</title>
        </Head>
          <div>
              <h1>Citation</h1>
              <p>
                  {data.quotes[0].text}
              </p>
          </div>
    </>
  )
}

export async function getStaticProps() {
    const citation = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    const data = await citation.json();

    return {
        props: {
            data
        }, 
        revalidate : 20
    }
}
