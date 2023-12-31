import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'
import { resolve } from 'styled-jsx/css';

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e9f7a72db8mshd5ffa58560bed95p13c2b6jsnfe3efbc2a744',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)


    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Movie and Series</h1>
                <div className={styles.card_section}>
                    {
                        main_data.map((movieData) => {
                            return <MovieCard key={movieData.id} {...movieData}></MovieCard>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Movie;