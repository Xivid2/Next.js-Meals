import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '../../../../lib/meals';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';

interface IMealPageProps {
    params: Params;
}

export async function generateMetadata({ params }: any) {
    const meal = await getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default async function MealPage({ params }: IMealPageProps) {
    const meal = await getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image
                        fill
                        src={meal.image}
                        alt={meal.title}
                    />
                </div>

                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>

                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>

                    <p className={styles.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>

            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }} />
            </main>
        </>
    )
}