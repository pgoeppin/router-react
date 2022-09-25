import Container from "react-bootstrap/Container"
import Contact from "../components/Contact"

export default function RenderContact() {
    return(
        <Container className="pt-5 text-center">
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <Contact/>
        </Container>
    )
}
