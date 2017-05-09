import { env } from '@/utils/config'

const api = {
    dev: {
        'upload': '/data?name=uploadFile',
        'userInfo': '/data?name=home_data',

    },
    pro: {
        'upload': '/user/background/update',
        'userInfo': '/user/home/data',
    }
}
export default api[env]
