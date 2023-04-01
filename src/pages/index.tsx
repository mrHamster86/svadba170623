import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer/Footer';
import { Promo } from '@/components/Promo/Promo';
import { Menu } from '@/components/Menu/Menu';
import { Invite } from '@/components/Invite/Invite';
import { TextWithGalleryProps, TextWithGallery } from '@/components/TextWithGallery/TextWithGallery';
import { HappyMoments } from '@/components/HappyMoments/HappyMoments';
import { Form } from '@/components/Form/Form';

const inter = Inter({ subsets: ['latin'] });

const registration: TextWithGalleryProps = {
  id: 'registration',
  title: 'Регистрация',
  text: 'Если Вы&nbsp;желаете разделить с&nbsp;нами трогательные минуты торжественной официальной регистрации, то&nbsp;ждем вас в&nbsp;Нижегородском Доме Бракосочетания по&nbsp;адресу: ул. Малая Покровская, 9, в&nbsp;15:00 зал купца Иконникова.',
  link: {
    href: 'https://yandex.ru/maps/?um=constructor%3A195c0726e8ec643564dfe354a0a8c14320906e18a75817dc9cbc8c7fd590a17f&source=constructorLink',
    label: 'Как проехать',
  },
  comment: 'После регистрации вы&nbsp;отправитесь в&nbsp;банкетный зал, где вас будет ждать приветственный фуршет.',
  gallery: [
    {
      original: 'img/gallery/zags-1.jpg',
      x2: 'img/gallery/zags-1@2x.jpg',
      x1webp: 'img/gallery/zags-1.webp',
      x2webp: 'img/gallery/zags-1@2x.webp',
    },
    {
      original: 'img/gallery/zags-2.jpg',
      x2: 'img/gallery/zags-2@2x.jpg',
      x1webp: 'img/gallery/zags-2.webp',
      x2webp: 'img/gallery/zags-2@2x.webp',
    },
    {
      original: 'img/gallery/zags-3.jpg',
      x2: 'img/gallery/zags-3@2x.jpg',
      x1webp: 'img/gallery/zags-3.webp',
      x2webp: 'img/gallery/zags-3@2x.webp',
    },
  ],
};

const banquet: TextWithGalleryProps = {
  id: 'banquet',
  title: 'Банкет',
  text: 'Если вы&nbsp;хотите присоединится к&nbsp;нашему торжеству сразу на&nbsp;банкете, то&nbsp;мы&nbsp;будем счастливы встретиться с&nbsp;вами на&nbsp;площадке &laquo;Forself&raquo;, Зеленский съезд, 4&nbsp;в 16:30',
  link: {
    href: 'https://yandex.ru/maps/?um=constructor%3A05d00a0998b9b628104015c0e575004d018d15fccf8fb7fccb4a2acb169dea8a&source=constructorLink',
    label: 'Как проехать',
  },
  gallery: [
    {
      original: 'img/gallery/forself-1.jpg',
      x2: 'img/gallery/forself-1@2x.jpg',
      x1webp: 'img/gallery/forself-1.webp',
      x2webp: 'img/gallery/forself-1@2x.webp',
    },
    {
      original: 'img/gallery/forself-2.jpg',
      x2: 'img/gallery/zags-2@2x.jpg',
      x1webp: 'img/gallery/forself-2.webp',
      x2webp: 'img/gallery/forself-2@2x.webp',
    },
    {
      original: 'img/gallery/forself-3.jpg',
      x2: 'img/gallery/forself-3@2x.jpg',
      x1webp: 'img/gallery/forself-3.webp',
      x2webp: 'img/gallery/forself-3@2x.webp',
    },
    {
      original: 'img/gallery/forself-4.jpg',
      x2: 'img/gallery/forself-4@2x.jpg',
      x1webp: 'img/gallery/forself-4.webp',
      x2webp: 'img/gallery/forself-4@2x.webp',
    },
  ],
}

export default function Home() {
  return (
    <>
      <Promo>
        <Menu />
        <Invite />
      </Promo>
      <main>
        <TextWithGallery
          {...registration}
        />
        <TextWithGallery
          flexDirection='row-reverse'
          {...banquet}
        />
        <HappyMoments/>
        <Form/>
      </main>
      <Footer />
    </>
  )
}
