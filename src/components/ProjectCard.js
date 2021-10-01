function ProjectCard () {
    return (
        <>
         <section id="work" class="row">
                <div class="row-content">       
                    <div class="project-box">
                        <a href="./stub.html" id="surf" class="lg-project-box">
                            <div class="title-box">
                                <h3>Surf Report (In progress)</h3><h4>MERN Stack</h4>
                            </div>
                        </a>
                        <a href="https://grudgecat.github.io/password-generator" id="led" class="sm-project-box">
                            <div class="title-box">
                                <h3>Password Generator</h3><h4>JavaScript</h4>
                            </div>
                        </a>
                        <a href="https://note-taker-se.herokuapp.com" id="calculator" class="sm-project-box">
                            <div class="title-box">
                                <h3>Note Taker Application</h3><h4>Node/Heroku</h4>
                            </div>
                        </a>
                        <a href="https://github.com/grudgecat/readme-generator" id="puzzle" class="sm-project-box">
                            <div class="title-box">
                                <h3>ReadMe File Generator</h3><h4>Node Application</h4>
                            </div>
                        </a>
                        <a href="https://grudgecat.github.io/weather-dashboard/"  id="run" class="sm-project-box">
                            <div class="title-box">
                                <h3>Weather Dashboard</h3><h4>JavaScript/3rd Party API</h4>
                            </div>
                        </a>
                    </div>
                </div>   
        </section>
        </>
    )
}

export default ProjectCard;