import Container from "react-bootstrap/Container"

export default function RenderNotFound() {
    return(
        <Container className="pt-5 text-center">
        <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      </Container>
    )
}