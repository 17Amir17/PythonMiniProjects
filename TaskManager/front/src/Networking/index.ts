import axios from 'axios';
import { Stats } from '../utils/types';
import { SetterOrUpdater } from 'recoil'

const BASE_URL = 'http://localhost:5000';
const INTERVAL = 1000
export async function runNetworking(set: SetterOrUpdater<Stats | undefined>){
    setInterval(() => {
        update(set);
    }, INTERVAL)
}

async function update(set: SetterOrUpdater<Stats | undefined>){
    try {
        const res = await axios.get<Stats>(`${BASE_URL}/stats`);
        set(res.data);
    } catch (error) {
        console.log(error);
    }
}