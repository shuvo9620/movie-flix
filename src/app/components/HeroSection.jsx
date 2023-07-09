import React from 'react';
import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Link from 'next/link';
import Image from 'next/image';


const HeroSection = ({title, imageUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>Experience the ultimate movie-watching destination with our Movie Flix website, where captivating stories come to life on your screens.</p>
                        <Link href='/movie'>
                            <button>
                                Explore Movies
                            </button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                    <Image src={imageUrl} alt='photo' width={500} height={500} />
                    </div>
                </div>

            </div>
        </main>
    );
};

export default HeroSection;