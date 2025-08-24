import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import leftarrow from "../assets/home/icons/test_left.svg";
import rightarr from "../assets/home/icons/test_right.svg";

export const GalleryPlaces = () => {
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
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#carousel_container",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!tour) return null;

  return (
    <section>
      <section className="carousel_header">
        <h3>Gallery</h3>
        <section className="arrows">
          <button className="prev btn">
            <img src={leftarrow} alt="back to previous place" />
          </button>
          <button className="next btn">
            <img src={rightarr} alt="go to the next place" />
          </button>
        </section>
      </section>

      <section
        id="carousel_container"
        style={{ display: "flex", gap: "1.4em" }}
        key={tour._id}
      >
        <a
          href={tour.img4}
          data-pswp-width="1400"
          data-pswp-height="933"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "700px", height: "500px" }}
            src={tour.img4}
            alt="place 1"
          />
        </a>

        <section
          style={{ display: "flex", flexDirection: "column", gap: "1.4em" }}
        >
          <a
            href={tour.img5}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "340px", height: "202px" }}
              src={tour.img5}
              alt="place 2"
            />
          </a>
          <a
            href={tour.img6}
            data-pswp-width="1400"
            data-pswp-height="933"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "340px", height: "202px" }}
              src={tour.img6}
              alt="place 3"
            />
          </a>
        </section>

        <a
          href={tour.img7}
          data-pswp-width="1400"
          data-pswp-height="933"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "340px", height: "500px" }}
            src={tour.img7}
            alt="place 4"
          />
        </a>
      </section>
    </section>
  );
};
