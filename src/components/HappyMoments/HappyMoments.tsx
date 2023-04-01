import { useCallback, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import YouTube from 'react-youtube';

import styles from './HappyMoments.module.scss';

const gallery = [
    {
        video: 'Mqv4j8eE6BU',
        type: 'video',
        original: 'img/gallery/photo-video.jpg',
        x2: 'img/gallery/photo-video@2x.jpg',
        x1webp: 'img/gallery/photo-video.webp',
        x2webp: 'img/gallery/photo-video@2x.webp',
    },
    {
        original: 'img/gallery/photo-1.jpg',
        x2: 'img/gallery/photo-1@2x.jpg',
        x1webp: 'img/gallery/photo-1.webp',
        x2webp: 'img/gallery/photo-1@2x.webp',
    },
    {
        original: 'img/gallery/photo-2.jpg',
        x2: 'img/gallery/photo-2@2x.jpg',
        x1webp: 'img/gallery/photo-2.webp',
        x2webp: 'img/gallery/photo-2@2x.webp',
    },
    {
        original: 'img/gallery/photo-3.jpg',
        x2: 'img/gallery/photo-3@2x.jpg',
        x1webp: 'img/gallery/photo-3.webp',
        x2webp: 'img/gallery/photo-3@2x.webp',
    },
    {
        original: 'img/gallery/photo-4.jpg',
        x2: 'img/gallery/photo-4@2x.jpg',
        x1webp: 'img/gallery/photo-4.webp',
        x2webp: 'img/gallery/photo-4@2x.webp',
    },
    {
        original: 'img/gallery/photo-5.jpg',
        x2: 'img/gallery/photo-5@2x.jpg',
        x1webp: 'img/gallery/photo-5.webp',
        x2webp: 'img/gallery/photo-5@2x.webp',
    },
    {
        original: 'img/gallery/photo-6.jpg',
        x2: 'img/gallery/photo-6@2x.jpg',
        x1webp: 'img/gallery/photo-6.webp',
        x2webp: 'img/gallery/photo-6@2x.webp',
    },
    {
        original: 'img/gallery/photo-7.jpg',
        x2: 'img/gallery/photo-7@2x.jpg',
        x1webp: 'img/gallery/photo-7.webp',
        x2webp: 'img/gallery/photo-7@2x.webp',
    },
    {
        original: 'img/gallery/photo-8.jpg',
        x2: 'img/gallery/photo-8@2x.jpg',
        x1webp: 'img/gallery/photo-8.webp',
        x2webp: 'img/gallery/photo-8@2x.webp',
    },
    {
        original: 'img/gallery/photo-9.jpg',
        x2: 'img/gallery/photo-9@2x.jpg',
        x1webp: 'img/gallery/photo-9.webp',
        x2webp: 'img/gallery/photo-9@2x.webp',
    },
    {
        original: 'img/gallery/photo-10.jpg',
        x2: 'img/gallery/photo-10@2x.jpg',
        x1webp: 'img/gallery/photo-10.webp',
        x2webp: 'img/gallery/photo-10@2x.webp',
    },
];

type GalleryItem = { x2: string; x1webp: string; x2webp: string; video?: string; type?: 'video'; } & ReactImageGalleryItem;

const videoIndex = gallery.findIndex(({ type }) => type === 'video');

export const HappyMoments = () => {
    const [isRenderVideo, setRenderVideo] = useState(true);
    const [isReadyVideo, setReadyVideo] = useState(false);

    const handleSlide = useCallback((index: number) => {
        if (index === videoIndex) {
             setRenderVideo(true);
        } else {
            setRenderVideo(false);
            setReadyVideo(false);
        }
    }, [setRenderVideo, setReadyVideo]);

    const handleReady = useCallback(() => {
        setReadyVideo(true);
    }, [isReadyVideo]);

    const renderItem = ({ original, x2, x1webp, x2webp, video, type }: GalleryItem) => {
        const isVideo = type === 'video';

        const videoStyle = [styles.videoWrapper];

        if (isReadyVideo) {
            videoStyle.push(styles.ready);
        }

        return isVideo ?
            (
                <>
                    <div key={original} className={styles.imgWrapper}>
                        <picture>
                            <source srcSet={`${x1webp} 1x, ${x2webp} 2x`} />
                            <img className={styles.img} src={original} srcSet={`${x2} 2x`} width="610" height="500" />
                        </picture>
                        {isRenderVideo && <YouTube
                            videoId={video}
                            className={videoStyle.join(' ')}
                            iframeClassName={styles.video}
                            onReady={handleReady}
                        />}
                    </div>
                </>
            ) : (
                <div key={original} className={styles.imgWrapper}>
                    <picture>
                        <source srcSet={`${x1webp} 1x, ${x2webp} 2x`} />
                        <img className={styles.img} src={original} srcSet={`${x2} 2x`} width="610" height="500" />
                    </picture>
                </div>
            );
    };

    return (
        <div id='gallery' className={styles.happyMoments}>
            <div className={styles.wrapper}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: 'Наши счастливые&nbsp;моменты' }} />
                <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showBullets
                    items={gallery}
                    additionalClass={styles.gallery}
                    //@ts-ignore
                    renderItem={renderItem}
                    onSlide={handleSlide}
                />
            </div>
        </div>
    );
}
