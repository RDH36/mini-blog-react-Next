import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CODE.io</title>
      </Head>
      <div className='container my-5'>
        <h1>Bienvenue sur Code.io</h1>
        <p>Le blog communeautaire des développements Web.</p>

        <div className="row mt-5">
          <div className='col-sm-6 col-12'>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className='card-title'>Listes des article</h5>
                <h6 className='card-substitle mb-2 text-muted'>Maximisez votre culture sur le Web</h6>
                <p className='card-text'>Chaque auteur tente de vous apporter le plus de valeur possible sur leur article</p>
                <Link href='/blog'>
                    <a>Visitez le blog</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-12'>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className='card-title'>Faite un tour vers la liste de membres</h5>
                <h6 className='card-substitle mb-2 text-muted'>Faite un tour vers la liste de membres</h6>
                <p className='card-text'>Ajoutez, invitez et discutez avec les différentes membres</p>
                <Link href='/contact'>
                    <a>Découvre la liste des memmbres</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}
