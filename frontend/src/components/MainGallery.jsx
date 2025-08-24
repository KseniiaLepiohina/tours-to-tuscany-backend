import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export const MainGallery = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/tour/tours/${id}`
        );
        setTour(response.data);
      } catch (error) {
        setError(error.message || "Error to fetch tour");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#main-gallery",
      children: "a",
      showHideAnimationType: "zoom",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!tour) return null;

  return (
    <section className="main_gallery" id="main-gallery">
      <a
        href={tour.img}
        data-pswp-width="1400"
        data-pswp-height="933"
        target="_blank"
        rel="noreferrer"
        style={{ display: "contents" }}
      >
        <img
          src={tour.img}
          style={{ height: "600px", width: "700px", borderRadius: "0.8em" }}
          alt="Main"
        />
      </a>

      <section style={{ display: "flex", gap: "1.4em" }}>
        {[tour.img1, tour.img2, tour.img3].map((src, idx) => (
          <a
            key={idx}
            href={src}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
            style={{ display: "contents" }}
          >
            <img
              src={src}
              style={{ height: "140px", width: "220px", borderRadius: "0.8em" }}
              alt={`Gallery ${idx + 1}`}
            />
          </a>
        ))}
      </section>
    </section>
  );
};
