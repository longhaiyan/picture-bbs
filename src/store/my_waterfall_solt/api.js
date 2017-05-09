
import { env } from '@/utils/config'

const api = {
    dev: {
        'like': '/data?name=mirror',

    },
    pro: {
        'like': '/project/like/update',
    }
}
export default api[env]