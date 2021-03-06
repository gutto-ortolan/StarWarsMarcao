import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import Banner from '../components/Banner';

export default function Login() {
  return (
    <>

      <Banner titulo="Star Wars Cinematic Universe" mensagem="Um portal web para os fãs de Star Wars" />  
      <section id="three" className="wrapper special">
        <div className="inner login-center">
          <Card style={{ width: "50%" }} className="box">
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                className="alinharEsquerda"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted alinharEsquerda">
                  Não passe as suas credenciais para mais ninguém.
                </Form.Text>
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="alinharEsquerda"
              >
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="alinharEsquerda"
              >
                Entrar
              </Button>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
}
