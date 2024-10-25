import './guidelines.css';

/**
 * Renders the brand naming and guidelines section, which includes a slideshow 
 * showcasing examples of different projects.
 * 
 * @returns {JSX.Element} - The rendered Guidelines component.
 */
const Guidelines: React.FC = () => {
    return (
        <section id="guidelines">
            <div id="guidelines-header">
                <div>
                    <h2>Brand naming & guidelines</h2>
                    <nav id="guidelines-navBar">
                        <button id="previousBt" className='guidelines-navBar-bt'></button>
                        <button id="nextBt" className='guidelines-navBar-bt'></button>
                    </nav>
                </div>
            </div>
            <div className="project">
                <div className='projectDetails'>
                    <p className='projectTitle'>Lean Product Roadmap</p>
                    <p className='projectDate'>2019 Project</p>
                </div>
            </div>
        </section>
    )
}
export default Guidelines;