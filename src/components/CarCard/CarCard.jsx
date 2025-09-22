import Image from "next/image";
import styles from "./CarCard.module.css";

export default function CarCard({ car }) {
  return (
    <section className={styles.container}>
      <Image
        className={styles.carImage}
        src={car.image}
        alt={car.title}
        width={300}
        height={200}
      />
      <p className={styles.location}>{car.location}</p>
      <div className={styles.titlecontainer}>
        <h3 className={styles.title}>{car.title}</h3>
        <Image src={car.iconImage} alt="icon" width={20} height={20} />
      </div>

      <p className={styles.price}>{car.price}</p>
      <hr className={styles.divider} />

      <ul className={styles.tags}>
        {car.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
