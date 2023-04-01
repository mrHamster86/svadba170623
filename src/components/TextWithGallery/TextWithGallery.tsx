import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import style from './TextWithGallery.module.scss';

type GalleryItem = { x2: string; x1webp: string; x2webp: string; } & ReactImageGalleryItem;

export type TextWithGalleryProps = {
    id: string;
    title: string;
    text: string;
    link?: {
        href: string;
        label: string;
    };
    comment?: string;
    gallery: GalleryItem[];
    flexDirection?: 'row' | 'row-reverse';
}

const renderItem = ({ original, x2, x1webp, x2webp }: GalleryItem) => {
    return (
        <div key={original} className={style.imgWrapper}>
            <picture>
                <source srcSet={`${x1webp} 1x, ${x2webp} 2x`} />
                <img className={style.img} src={original} srcSet={`${x2} 2x`} width="610" height="500" />
            </picture>
        </div>
    );
};

export const TextWithGallery = ({
    id,
    title,
    text,
    link,
    comment,
    flexDirection = 'row',
    gallery,
}: TextWithGalleryProps) => {
    return (
        <section id={id} className={style.section} style={{ flexDirection }}>
            <div className={style.content}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.text} dangerouslySetInnerHTML={{ __html: text }} />
                {link && (<a href={link.href} className={style.link}>{link.label}</a>)}
                {comment && (<p className={style.comment} dangerouslySetInnerHTML={{ __html: comment }} />)}
            </div>
            <div className={style.gallery}>
                <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showBullets
                    items={gallery}
                    //@ts-ignore
                    renderItem={renderItem}
                />
            </div>
        </section>
    );
};
