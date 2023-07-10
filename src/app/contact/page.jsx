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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58315.78496839946!2d89.16255132167971!3d24.005078099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b865053dc4f%3A0xdfdffe57341c3995!2sBani%20Bina%20Complex!5e0!3m2!1sen!2sbd!4v1688967770518!5m2!1sen!2sbd" width={450} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;