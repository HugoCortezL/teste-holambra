import { ProspectsTableContainer, Header, TableContent, Footer } from './styles'
import ProspectsTableContent from '../ProspectsTableContent'
import { AiOutlinePlus, AiOutlineDownload } from 'react-icons/ai'
import { Prospect } from '../../../models'
import { useState } from 'react'
import Backdrop from '../../shared/Backdrop'
import Modal from '../../shared/Modal'
import { ProspectService } from '../../../api/prospect.api'

interface ProspectsTableProps {
    isLoading: boolean
    data: any
    deleteFunction: (id: number) => void
    createFunction: (data: Prospect) => void
    editFunction: (id: number, data: Prospect) => void
}

export default function ProspectsTable(props: ProspectsTableProps) {
    const prospectService = new ProspectService()
    const [creating, setCreating] = useState(false)
    const [prospectToCreate, setProspectToCreate] = useState<Prospect>({
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

    const startCreating = () => {
        setCreating(true)
        setProspectToCreate({
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

    const cancelCreating = () => {
        setCreating(false)
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

    const create = () => {
        if (validateProspect()) {
            setCreating(false)
            props.createFunction(prospectToCreate)
        }
    }

    const downloadCsv = async () => {
        await prospectService.downloadCsv()
    }

    if (props.isLoading) {
        return (
            <div>
                <h1>
                    CARREGANDO ...
                </h1>
            </div>
        )
    }

    return (
        <>
            {
                creating &&
                <Backdrop click={cancelCreating} />
            }
            {
                creating &&
                <Modal confirmText='Adicionar' title='Adicionar Prospect' onCancel={cancelCreating} onConfirm={create}>
                    <form>
                        <div className='general'>
                            <h2>Dados Gerais</h2>
                            <div className="input-group mg-10">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" placeholder='Hugo Cortez'
                                    value={prospectToCreate.name}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, name: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="document">Documento:</label>
                                <input type="text" id="document" placeholder='111.222.333-44'
                                    value={prospectToCreate.document}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, document: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" placeholder='exemplo@gmail.com'
                                    value={prospectToCreate.email}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, email: event?.target.value })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="phone">Telefone:</label>
                                <input type="phone" id="phone" placeholder='(**) 9 1234-5678'
                                    value={prospectToCreate.phone}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, phone: event?.target.value })}
                                />
                            </div>

                        </div>
                        <span className='form-divisor'></span>
                        <div className='address'>
                            <h2>Endereço</h2>
                            <div className="input-group mg-10">
                                <label htmlFor="zip">CEP:</label>
                                <input type="text" id="zip" placeholder='52000-007'
                                    value={prospectToCreate.AddressId.zipcode}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, zipcode: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="street">Rua:</label>
                                <input type="text" id="street" placeholder='Rua aleatória'
                                    value={prospectToCreate.AddressId.street}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, street: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="number">Número:</label>
                                <input type="text" id="number" placeholder='30'
                                    value={prospectToCreate.AddressId.number}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, number: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="complement">Complemento:</label>
                                <input type="text" id="complement" placeholder='Bloco A, apto.1010'
                                    value={prospectToCreate.AddressId.complement}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, complement: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="neighborhood">Bairro:</label>
                                <input type="text" id="neighborhood" placeholder='Tamarineira'
                                    value={prospectToCreate.AddressId.neighborhood}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, neighborhood: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="city">Cidade:</label>
                                <input type="text" id="city" placeholder='Recife'
                                    value={prospectToCreate.AddressId.city}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, city: event?.target.value } })}
                                />
                            </div>
                            <div className="input-group mg-10">
                                <label htmlFor="state">Estado:</label>
                                <input type="text" id="state" placeholder='Pernambuco'
                                    value={prospectToCreate.AddressId.state}
                                    onChange={(event) => setProspectToCreate({ ...prospectToCreate, AddressId: { ...prospectToCreate.AddressId, state: event?.target.value } })}
                                />
                            </div>
                        </div>
                    </form>
                </Modal>
            }
            <ProspectsTableContainer>
                <Header>
                    <h2>
                        Prospects
                    </h2>
                    <div className='buttons-options'>
                        <button className='secundary-button' onClick={downloadCsv}>
                            <span className="icon">
                                <AiOutlineDownload size={20} color={"#003262"} />
                            </span>
                            <span className='hide-on-phone'>
                                Download CSV
                            </span>
                        </button>
                        <button className='primary-button' onClick={startCreating}>
                            <span className="icon">
                                <AiOutlinePlus size={20} color={"#FFF"} />
                            </span>
                            <span className='hide-on-phone'>
                                Adicionar
                            </span>
                        </button>

                    </div>
                </Header>
                <TableContent>
                    <ProspectsTableContent data={props.data} deleteFunction={props.deleteFunction} editFunction={props.editFunction} />
                </TableContent>
                <Footer />
            </ProspectsTableContainer>
        </>
    )
}
