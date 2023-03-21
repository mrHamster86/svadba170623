import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer/Footer';
import { Promo } from '@/components/Promo/Promo';
import { Menu } from '@/components/Menu/Menu';
import { Invite } from '@/components/Invite/Invite';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Promo>
        <Menu/>
        <Invite/>
      </Promo>
      <main></main>
      <Footer/>
    </>
  )
}
