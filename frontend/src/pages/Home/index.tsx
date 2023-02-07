import { ProspectService } from "../../api/prospect.api"
import { useEffect, useState } from 'react'
import { HomeContent } from './styles'
import Header from '../../components/shared/Header'
import ProspectsTable from "../../components/core/ProspectsTable"
import { Prospect } from "../../models"



export default function Home() {
    const prospectService = new ProspectService()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const getAllProspects = async () => {
        try {
            setLoading(true)
            const result = await prospectService.getAll()
            setData(result)
        }
        catch (err: any) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const deleteProspect = async (id: number) => {
        try {
            await prospectService.delete(id)
        }
        catch (err: any) {
            console.log(err)
        }
        finally {
            await getAllProspects()
        }
    }

    const createProspect = async (data: Prospect) => {
        try {
            await prospectService.create(data)
        }
        catch (err: any) {
            console.log(err)
        }
        finally {
            await getAllProspects()
        }
    }
    
    const updateProspect = async (id: number, data: Prospect) => {
        try {
            await prospectService.update(id, data)
        }
        catch (err: any) {
            console.log(err)
        }
        finally {
            await getAllProspects()
        }
    }

    useEffect(() => {
        getAllProspects()
    }, [])

    return (
        <div>
            <Header />
            <HomeContent>
                <ProspectsTable isLoading={loading} data={data} deleteFunction={deleteProspect} createFunction = {createProspect} editFunction = {updateProspect} />
            </HomeContent>
        </div>
    )
}
