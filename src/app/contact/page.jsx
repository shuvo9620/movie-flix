import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from '@/app/styles/contact.module.css'
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard></ContactCard>

                <section className={styles.contact_section}>
                <h2>We'd love to hear <span> from you </span></h2>
                <ContactForm></ContactForm>

                </section>
            </div>

        </>
    );
};

export default Contact;