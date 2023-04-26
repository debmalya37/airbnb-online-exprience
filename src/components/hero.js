import React from "react";
import HeroPic from "../images/hero-img.webp";
export default function Hero() {
    return (
        <section className="hero">
            <img src={HeroPic} alt="airbnb-experience" className="exp--img"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}