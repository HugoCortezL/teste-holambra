import { useState } from 'react'
import { Prospect, ProspectView } from '../../../models'
import { ProspectsTableContentContainer, Table } from './styles'
import { BsTrash, BsPencil } from 'react-icons/bs'
import Backdrop from '../../shared/Backdrop'
import Modal from '../../shared/Modal'
import { ProspectService } from '../../../api/prospect.api'


interface ProspectsTableContentProps {
    data: any
    deleteFunction: (id: number) => void
    editFunction: (id: number, data: Prospect) => void
}

export default function ProspectsTableContent(props: ProspectsTableContentProps) {
    const prospectService = new ProspectService()
    const [editing, setEditing] = useState(false)
    const [prospectToEdit, setProspectToEdit] = useState({
        id: 0,
        name: "",
        email: "",
        document: "",
        phone: "",
        AddressId: {
            id: 0,
            city: "",
            complement: "",
            neighborhood: "",
            number: "",
            state: "",
            street: "",
            zipcode: ""
        }
    })

    const startEditing = async (id: number) => {
        setEditing(true)
        const prospect = await prospectService.getById(id)
        setProspectToEdit({
            id: prospect.data.id[0],
            name: prospect.data.name,
            email: prospect.data.email,
            document: prospect.data.document,
            phone: prospect.data.phone,
            AddressId: {
                id: prospect.data.id[1],
                city: prospect.data.city,
                complement: prospect.data.complement,
                neighborhood: prospect.data.neighborhood,
                number: prospect.data.number,
                state: prospect.data.state,
                street: prospect.data.street,
                zipcode: prospect.data.zipcode
            }
        })
    }

    const cancelEditing = () => {
        setEditing(false)
        setProspectToEdit({
            id: 0,
            name: "",
            email: "",
            document: "",
            phone: "",
            AddressId: {
                id: 0,
                city: "",
                complement: "",
                neighborhood: "",
                number: "",
                state: "",
                street: "",
                zipcode: ""
            }
        })
    }

    const validateField = (fieldId: string) => {
        const fieldEl = document.getElementById(fieldId)
        if (!fieldEl?.value || fieldEl?.value.trim().length < 1) {
            fieldEl?.classList.add("wrong")
            return false
        } else {
            fieldEl?.classList.remove("wrong")
            return true
        }
    }

    const validateProspect = () => {
        let correct = true
        const fieldsIds = ["name", "document", "email", "phone", "zip", "street", "number", "complement", "neighborhood", "city", "state"]
        for (let fieldId of fieldsIds) {
            const fieldCorrect = validateField(fieldId)
            correct = correct && fieldCorrect
        }
        return correct
    }

    const confirmEdit = () => {
        if (validateProspect()) {
            cancelEditing()
            props.editFunction(prospectToEdit.id, prospectToEdit)
        }
    }

    return (
        <>
            {
                editing &&
                <Backdrop click={cancelEditing} />
            }
            {
                editing &&
                <Modal confirmText='Editar' title='Editar Prospect' onCancel={cancelEditing} onConfirm={confirmEdit}>
                    <form>
                        <div className='general'>
                            <h2>Dados Gerais</h2>
                            <div className="input-group mg-10">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" placeholder='Hugo Cortez'
                                    value={prospectToEdit.name}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, name: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="document">Documento:</label>
                                <input type="text" id="document" placeholder='111.222.333-44'
                                    value={prospectToEdit.document}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, document: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" placeholder='exemplo@gmail.com'
                                    value={prospectToEdit.email}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, email: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="phone">Telefone:</label>
                                <input type="phone" id="phone" placeholder='(**) 9 1234-5678'
                                    value={prospectToEdit.phone}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, phone: event?.target.value })}
                                />
                            </div>

                        </div>
                        <span className='form-divisor'></span>
                        <div className='address'>
                            <h2>Endereço</h2>
                            <div className="input-group mg-10">
                                <label htmlFor="zip">CEP:</label>
                                <input type="text" id="zip" placeholder='52000-007'
                                    value={prospectToEdit.AddressId.zipcode}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, zipcode: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="street">Rua:</label>
                                <input type="text" id="street" placeholder='Rua aleatória'
                                    value={prospectToEdit.AddressId.street}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, street: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="number">Número:</label>
                                <input type="text" id="number" placeholder='30'
                                    value={prospectToEdit.AddressId.number}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, number: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="complement">Complemento:</label>
                                <input type="text" id="complement" placeholder='Bloco A, apto.1010'
                                    value={prospectToEdit.AddressId.complement}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, complement: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="neighborhood">Bairro:</label>
                                <input type="text" id="neighborhood" placeholder='Tamarineira'
                                    value={prospectToEdit.AddressId.neighborhood}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, neighborhood: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="city">Cidade:</label>
                                <input type="text" id="city" placeholder='Recife'
                                    value={prospectToEdit.AddressId.city}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, city: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="state">Estado:</label>
                                <input type="text" id="state" placeholder='Pernambuco'
                                    value={prospectToEdit.AddressId.state}
                                    onChange={(event) => setProspectToEdit({ ...prospectToEdit, AddressId: { ...prospectToEdit.AddressId, state: event?.target.value } })}
                                />
                            </div>
                        </div>
                    </form>
                </Modal>
            }
            <ProspectsTableContentContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Documento</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.data.map((item: ProspectView) => {
                                return (
                                    <tr key={item.id[0]}>
                                        <td className='name'>{item.name}</td>
                                        <td>{item.document}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{`${item.street}, ${item.number} (${item.city})`}</td>
                                        <td className='row-options'>
                                            <button className='button-icon' onClick={() => props.deleteFunction(item.id[0])}>
                                                <BsTrash size={20} />
                                            </button>
                                            <button className='button-icon' onClick={() => startEditing(item.id[0])} >
                                                <BsPencil size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </ProspectsTableContentContainer>
        </>
    )
}
