import React from 'react'
import {Button, Form, Card} from 'react-bootstrap'

export default function Login() {

    return (
    <>
        <section id="three" className="login-page">
            <div className="inner login-center">
                <Card style={{width: '50%'}}className="box">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email"/>
                            <Form.Text className="text-muted">
                                Não passe as suas credenciais para mais ninguém.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Card>
                </div>
            </section>
        </>
        )
        
        
        }
