import React, { useEffect } from "react";

export default function SectionOverview() {

    const [ sections, setSections ] = React.useState([]);

    React.useEffect(() => {
        const section = document.querySelector(".content-section");
        const titles = section.querySelectorAll("h2");
        titles.forEach((title) => {
            title.id = title.textContent
        })

        setSections(Array.from(titles))

        window.addEventListener(('DOMContentLoaded'), scrollObserver(titles))

        return () => { window.removeEventListener('DOMContentLoaded', scrollObserver(titles)) }

    }, [])

    const scrollObserver = (titles) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const item = document.querySelector(`.section-overview li a[href="#${id}"]`)
                if (entry.intersectionRatio > 0 && item) {
                    item.parentElement.classList.add('active');
                } else if(item && entry.intersectionRatio <= 0) {
                    item.parentElement.classList.remove('active');
                }
            });
        });
    
        titles.forEach((section) => {
            observer.observe(section);
        });
    }

    
    return (
        <div className="flex flex-col section-overview fixed right-0">
            <h2>In this project</h2>
            <ul>
                {sections.map((section, index) => {
                    return(
                        <li key={index}>
                            <a href={`#${section.textContent}`}>{section.textContent}</a>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}