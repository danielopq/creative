import {useEffect, useState } from 'react';
import './guidelines.css';
import Project from './project/Project';


type Opacities = number[];

/**
 * Renders the Guidelines component, which includes a brand naming and guidelines section
 * along with a slideshow showcasing examples of various projects.
 * 
 * @returns {JSX.Element} - The rendered Guidelines component.
 */
const Guidelines: React.FC = () => {

    const [currentProject, setCurrentProject] = useState<number>(0);
    const [projectsOpacity, setProjectsOpacity] = useState<Opacities>([1, 0, 0]);

    useEffect(() => {
        const logTime = () => {
            navigateSlide('next');
        };
        const intervalId = setInterval(logTime, 5000);
        return () => clearInterval(intervalId);
    }, [currentProject]);

    /**
     * Updates the displayed project based on the selected index.
     * @param {number} projectNumber - The index of the project to display.
     */
    const displayProject = (projectNumber: number) => {
        let newOpacities: Opacities = [0, 0, 0];
        newOpacities[projectNumber] = 1;
        setProjectsOpacity(newOpacities);
        setCurrentProject(projectNumber);
    }

    /**
     * Navigates to the next or previous project in the slideshow.
     * @param {'previous' | 'next'} direction - The direction to navigate. Use 'next' for the next project or 'previous' for the previous project.
     */
    const navigateSlide = (direction: 'previous' | 'next') => {
        if (direction === 'previous') {
            currentProject === 0 ? displayProject(projectsOpacity.length - 1) : displayProject(currentProject - 1);
        } else {
            (currentProject === projectsOpacity.length - 1) ? displayProject(0) : displayProject(currentProject + 1);
        }
    }

    return (
        <section id="guidelines">
            <div id="guidelines-header">
                <div>
                    <h2>Brand naming & guidelines</h2>
                    <nav id="guidelines-navBar">
                        <button id="previousBt" aria-label="Previous project" className='guidelines-navBar-bt' onClick={() => navigateSlide('previous')}></button>
                        <button id="nextBt" aria-label="Next project" className='guidelines-navBar-bt' onClick={() => navigateSlide('next')}></button>
                    </nav>
                </div>
            </div>
            
            <Project projectTitle='Lean Product Roadmap' projectDate='2019 Project' backgroundPicture='/img/lean.jpg' zIndex={3} opacity={projectsOpacity[0]} />,
            <Project projectTitle='New Majestic Hotel' projectDate='2018 Project' backgroundPicture='/img/majestic.jpg' zIndex={2} opacity={projectsOpacity[1]} />,
            <Project projectTitle='Crypto Dashboard' projectDate='2016 Project' backgroundPicture='/img/cripto.jpg' zIndex={1} opacity={projectsOpacity[2]} />, 
        </section>
    )
}
export default Guidelines;