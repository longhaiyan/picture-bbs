import { env } from '@/utils/config'

const api = {
    dev: {
        'upload': '/data?name=uploadFile',

    },
    pro: {
        'upload': '/user/background/update',
    }
}
export default api[env]
