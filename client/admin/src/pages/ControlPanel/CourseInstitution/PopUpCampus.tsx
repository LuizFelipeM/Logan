import { StandardCard } from 'bootstrap-based-components'
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { Modal, Button, Form as BForm } from 'react-bootstrap'
import campusService from '../../../services/campusService'

export interface INewCampusAndUf {
  campus_name: string,
  name_uf: string
}

const PopUpCampus: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [campus, setCampus] = useState('')
  const [uf, setuf] = useState('')

  function handleSubmit(campusUf:INewCampusAndUf) {
    campusService.createCampusNameAndUf(campusUf)
  }

  return (
    <>
      <Button type="button" onClick={handleShow}>Adiconar Campus</Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>Insira as informações do Campus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              campus_name: '',
              name_uf: ''
            }}
          >
            <Form>
              <BForm.Group controlId="createCampus">
                <BForm.Label>Campus:</BForm.Label>
                <Field
                  className="form-control"
                  type="text"
                  name="campus_name"
                  placeholder="Nome do Campus"
                  required
                />
                <BForm.Label>Campus:</BForm.Label>
                <Field
                  className="form-control"
                  type="text"
                  name="name_uf"
                  placeholder="Insira a UF do campus"
                  required
                />
              </BForm.Group>
              <Button type="submit">Criar</Button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopUpCampus
