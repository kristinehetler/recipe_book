export default function ImproveSkills(){
    const list = [
        "Learn new resipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return(
        <div className="section improve-skills">
        <div className="col img">
            <img src="/foods/pork adobo.jpg" alt=""/>
        </div> 
            <div className="col typography">
                <h1 className="title">Improve Your Cooking Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Signup now</button>
            </div> 
        </div>
    )
}