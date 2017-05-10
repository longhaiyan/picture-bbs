
import { env } from '@/utils/config'

const api = {
    dev: {
        'data': '/data?name=img_detail',

    },
    pro: {
        'data': '/project/detail/data',

    }
}
export default api[env]