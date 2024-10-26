import { useState } from 'react';
import './guidelines.css';
import Project from './project/Project';


type Opacities = number[];

/**
 * Renders the brand naming and guidelines section, which includes a slideshow 
 * showcasing examples of different projects.
 * 
 * @returns {JSX.Element} - The rendered Guidelines component.
 */
const Guidelines: React.FC = () => {

    const [currentProject, setCurrentProject] = useState<number>(0);
    const [projectsOpacity, setProjectsOpacity] = useState<Opacities>([0, 0, 1]);
    const [timer, setTimer] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const displayProject = (projectNumber: number) => {
        let newOpacities: Opacities = [0, 0, 0];
        newOpacities[projectNumber] = 1;
        setProjectsOpacity(newOpacities);
        setCurrentProject(projectNumber);
    }

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
                        <button id="previousBt" className='guidelines-navBar-bt' onClick={() => navigateSlide('previous')}></button>
                        <button id="nextBt" className='guidelines-navBar-bt' onClick={() => navigateSlide('next')}></button>
                    </nav>
                </div>
            </div>
            <Project projectTitle='Lean Product Roadmap' projectDate='2019 Project' backgroundPicture='../../../public/img/lean.jpg' zIndex={3} opacity={projectsOpacity[0]} />,
            <Project projectTitle='New Majestic Hotel' projectDate='2018 Project' backgroundPicture='../../../public/img/majestic.jpg' zIndex={2} opacity={projectsOpacity[1]} />,
            <Project projectTitle='Crypto Dashboard' projectDate='2016 Project' backgroundPicture='../../../public/img/cripto.jpg' zIndex={1} opacity={projectsOpacity[2]} />,
        </section>
    )
}
export default Guidelines;