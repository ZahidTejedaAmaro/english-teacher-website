import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./style.module.css";

import { useContext } from "react";

import { LanguageContext } from "../../../../contexts/LanguageContext";

const en = [
  {
    id: 1,
    name: "Emily Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    review:
      "Thanks to these lessons, I feel much more confident speaking English in my daily life.",
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=2",
    review:
      "Every class was engaging and personalized. I improved faster than I expected.",
  },
  {
    id: 3,
    name: "Sophia Davis",
    image: "https://i.pravatar.cc/150?img=3",
    review: "The learning environment was always supportive and motivating.",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    image: "https://i.pravatar.cc/150?img=4",
    review:
      "I finally feel comfortable having conversations in English without fear.",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Classes adapted perfectly to my schedule and learning pace.",
  },
];

const es = [
  {
    id: 1,
    name: "Emily Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    review:
      "Gracias a estas clases, ahora me siento mucho más segura al hablar inglés en mi vida diaria.",
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=2",
    review:
      "Cada clase fue dinámica y personalizada. Mejoré mucho más rápido de lo que esperaba.",
  },
  {
    id: 3,
    name: "Sophia Davis",
    image: "https://i.pravatar.cc/150?img=3",
    review: "El ambiente de aprendizaje siempre fue muy agradable y motivador.",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    image: "https://i.pravatar.cc/150?img=4",
    review:
      "Por fin me siento cómodo manteniendo conversaciones en inglés sin miedo.",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "Las clases se adaptaron perfectamente a mi horario y a mi ritmo de aprendizaje.",
  },
];

export default function Testimonials() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside Langu ageContext.Provider");
  }

  const { language } = context;

  const text = language === "es" ? es : en;

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.testimonials}>
      <Swiper
        modules={[Pagination, Autoplay]}
        centeredSlides
        loop
        spaceBetween={30}
        autoplay={{
          delay: 8500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {text.map((testimonial, index) => (
          <SwiperSlide
            key={testimonial.id}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          >
            <article className={styles.card}>
              <div className={styles.shadowEffect}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.avatar}
                />

                <p className={styles.description}>{testimonial.review}</p>
              </div>

              <span className={styles.name}>{testimonial.name}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
