
import { env } from '@/utils/config'

const api = {
    dev: {
        'waterfall': '/data?name=index_water_fall',
        'waterfall_add': '/data?name=index_water_fall_add'
    },
    pro: {

    }
}
export default api[env]