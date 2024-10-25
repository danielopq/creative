import './approach.css';

/**
 * Renders the Approach section, showcasing the key guidelines for building a successful brand.
 * 
 * @returns {JSX.Element} - The rendered Approach component
 */
const Approach: React.FC = () => {
    return (
        <section id="approach">
            <h2>Our approach for creating a winning brand</h2>
            <div id="approach-content">
                <div id="approach-guidelines">
                    <div className='guideline-container'>
                        <div className='guideline-point-number'>01</div>
                        <div className='guideline-point-content'>
                            <p className='guideline-point-header'>Brand Strategy</p>
                            <p className='mainText'>
                                Brand strategy is critical for long-term success. Outshining
                                competitors and capturing the target audience are key.
                            </p>
                        </div>
                    </div>
                    <div className='guideline-container'>
                        <div className='guideline-point-number'>02</div>
                        <div className='guideline-point-content'>
                            <p className='guideline-point-header'>Brand Design</p>
                            <p className='mainText'>
                                Keeping the brand design unique and meaningful helps in communicating
                                the brand’s timeless value effectively.
                            </p>
                        </div>
                    </div>
                    <div className='guideline-container'>
                        <div className='guideline-point-number'>03</div>
                        <div className='guideline-point-content'>
                            <p className='guideline-point-header'>Web Design</p>
                            <p className='mainText'>
                                A beautifully crafted website is the best tool for brand awareness,
                                and ultimately results in increased revenues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Approach;