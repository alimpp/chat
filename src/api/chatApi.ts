import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import {chatDataStore} from '@/stores/chatDataStore'
import { ErrorNotification } from '@/services/applicationNotification'

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