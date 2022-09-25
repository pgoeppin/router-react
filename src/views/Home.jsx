import Container from "react-bootstrap/Container"

export default function RenderHome() {
    return(
        <Container className="pt-5 text-center">
        <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
        <p>El lugar de los pasteles felices</p>
        <h1 className="fs-1">🎂</h1>
        </Container>
    )
}