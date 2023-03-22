import style from './TextWithGallery.module.scss';

export type TextWithGalleryProps = {
    id: string;
    title: string;
    text: string;
    link?: {
        href: string;
        label: string;
    };
    comment?: string;
    gallery: { x1: string; x2: string; x1webp: string; x2webp: string; }[];
    flexDirection?: 'row' | 'row-reverse';
}

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
                {gallery.map(({ x1, x2, x1webp, x2webp }) => (
                    <div key={x1} className={style.imgWrapper}>
                        <picture>
                            <source srcSet={`${x1webp} 1x, ${x2webp} 2x`} />
                            <img className={style.img} src={x1} srcSet={`${x2} 2x`} width="610" height="500" />
                        </picture>
                    </div>
                ))}
            </div>
        </section>
    );
};
