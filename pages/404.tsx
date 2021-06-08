import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Oooops</h1>
      <h2>Cette page n'existe pas</h2>
      <p>La page que vous recherchez semble introuvable. Sans détour, il n'est point de voyage... Retournez à la page d'accueil.</p>
      <Link href="/"><a>Retour à l'accueil</a></Link>
    </div>
  )
}

export default NotFound;
