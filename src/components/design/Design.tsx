import './design.css';

/**
 * Renders the "Design is Strategic" section of the website.
 * 
 * This section includes an image, a heading, descriptive text, and a call-to-action 
 * button for scheduling a call.
 * 
 * @returns {JSX.Element} The Design component.
 */
const Design: React.FC = () => {
    return (
        <section id="design">
            <div id="design-mainPic"></div>
            <div id="design-content">
                <div>
                    <h2><span style={{ color: 'var(--red)' }}>Design</span> is strategic.</h2>
                    <p className='mainText'>
                        “A well-crafted design strategy consistently produces desired outcomes
                        and brand awareness. We are firm believers that success lies in creative
                        collaboration with our clients.”
                    </p>
                    <div id="design-button">Schedule a Call</div>
                </div>
            </div>
        </section>
    )
}
export default Design;