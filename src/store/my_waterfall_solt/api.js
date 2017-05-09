
import { env } from '@/utils/config'

const api = {
    dev: {
        'like': '/data?name=mirror',

    },
    pro: {
        'like': '/project/like/update/data',
    }
}
export default api[env]