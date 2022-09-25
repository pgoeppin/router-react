import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Navigation() {
    return (
        <Form className='text-center'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Descripción: </Form.Label>
                <Form.Control as='textarea' rows={3}/>
            </Form.Group>
            <Button variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
    )
}