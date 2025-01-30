
import team from "../Data/team"
import style from "../style/About.module.css"

export default function About() {
    return (
        <section className="container">
            <div className={`my-3 ${style.category}`}>
                <h1>Il nostro team</h1>
            </div>
            <div className="row">
                {team.map((member) => (
                    <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-between my-3" key={member.id}>
                        <div className="card bg-secondary-subtle" >
                            <img src={member.image} className="card-img-top" alt={member.name} />
                            <div className="card-body">
                                <h4 className="card-title">{member.name}</h4>
                                <h5 className="card-text "> {member.surname}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-secondary-subtle">{member.role}</li>
                                <li className="list-group-item bg-secondary-subtle">{member.status}</li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}