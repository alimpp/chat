import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import {chatDataStore} from '@/stores/chatDataStore'
import { ErrorNotification, SuccessNotification } from '@/services/applicationNotification'

const chatDataStoreModule = chatDataStore()

export const allMessages = async () => {
    await axios.get(`${application_base_url}${application_path.GET.MESSAGES}`)
    .then((res)=> {
        chatDataStoreModule.messages = res.data
    })
    .catch(()=> {
        ErrorNotification(3000,'Your network is low please try again and check network and check json server','bottom-center')
    })
}

export const SendMessage = async (param: string) => {
    await axios.post(`${application_base_url}${application_path.POST.SEND_MESSAGE}` , {
        role : "user" ,
        name : "Jhon Doe" , 
        message : param
    })
    .then(() => {
        setTimeout(() => {
            SuccessNotification(1000, 'Message Sended','top-center')
        } , 1000)
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network and check json server','bottom-center')
    })
}

export const BotMessage = async () => {
    await axios.post(`${application_base_url}${application_path.POST.SEND_MESSAGE}` , {
        role : "bot" ,
        name : "Chat Bot" , 
        message : "Thanks for message...!"
    })
    .then(() => {
        SuccessNotification(3000, 'You Have New Message','top-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network and check json server','bottom-center')
    })
}