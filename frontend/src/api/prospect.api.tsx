import axios from 'axios'
import { ProspectView } from '../models'

const BASE_URL = "http://localhost:8080/api/v1"
const PROSPECT_ENDPOINT = "/prospects"

export class ProspectService {
    async getAll() {
        return axios.get(`${BASE_URL}${PROSPECT_ENDPOINT}`)
            .then(response => {
                return response.data
            }
            )
            .catch(err => console.error(err))
    }

    async getById(id: number) {
        return axios.get(`${BASE_URL}${PROSPECT_ENDPOINT}/${String(id)}`)
            .then(response => {
                return response.data
            }
            )
            .catch(err => console.error(err))
    }

    async create(data: any) {
        return axios.post(`${BASE_URL}${PROSPECT_ENDPOINT}`, data)
            .then(response => {
                return response.data
            }
            )
            .catch(err => console.error(err))
    }
    async update(id: number, data: any) {
        return axios.put(`${BASE_URL}${PROSPECT_ENDPOINT}/${String(id)}`, data)
            .then(response => {
                return response.data
            }
            )
            .catch(err => console.error(err))
    }
    async delete(id: number) {
        return axios.delete(`${BASE_URL}${PROSPECT_ENDPOINT}/${String(id)}`)
            .then(response => {
                return response.data
            }
            )
            .catch(err => console.error(err))
    }



    async downloadCsv() {
        const prospects = await this.getAll()
        const result = prospects.data.map((prospect: ProspectView) => {
            return (
                {
                    id: prospect.id[0],
                    name: prospect.name,
                    email: prospect.email,
                    document: prospect.document,
                    phone: prospect.phone,
                    city: prospect.city,
                    complement: prospect.complement,
                    neighborhood: prospect.neighborhood,
                    number: prospect.number,
                    state: prospect.state,
                    street: prospect.street,
                    zipcode: prospect.zipcode
                }
            )
        })

        const arrayToCsv = (arr: any[]) => {
            const columns = Object.keys(arr[0]);
            const csvData = arr.map((row) => columns.map((col) => row[col]).join(','));
            const csv = [columns.join(','), ...csvData].join('\n');
            return csv;
        }
        const csv = arrayToCsv(result);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'file.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }


}
