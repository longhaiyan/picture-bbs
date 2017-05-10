import { env } from '@/utils/config'

const api = {
    dev: {
        'upload': '/data?name=uploadFile',
        'userInfo': '/data?name=home_data',
        'fellow':'/data?name=mirror',
        'updateFollow':'/data?name=mirror',

    },
    pro: {
        'upload': '/user/background/update',
        'userInfo': '/user/home/data',
        'fellow':'/user/follow/show',
        'updateFollow':'/user/follow/update',
    }
}
export default api[env]
